using GODE.DataAccess.Context;
using GODE.DataAccess.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace GODE.DataAccess.Repositories
{
    public interface ITaskRepository
    {
        Mission CreateTask(Mission task);
        List<Mission> GetTask();
        Mission AddProgress(Guid TaskId, int Minutes);
        Mission MarkAsCompleted(Guid TaskId);
    }

    public class TaskRepository : ITaskRepository
    {

        private readonly GODEDbContext _context;
        public TaskRepository(GODEDbContext context)
        {
            _context = context;
        }

        public Mission AddProgress(Guid TaskId, int Minutes)
        {
            Mission task = _context.Tasks
                .FirstOrDefault(x => x.Id == TaskId);

            if(task != null)
            {
                task.Progress += Minutes;
            }
            _context.SaveChanges();
            return task;
        }

        public Mission CreateTask(Mission task)
        {
            Goal goal = _context.Goals
                .Include(x => x.Tasks)
                .FirstOrDefault(x => x.Id == task.GoalId);

            goal.Tasks.Add(task);
            _context.SaveChanges();
            return task;
        }

        public List<Mission> GetTask()
        {
            return _context.Tasks.ToList();
        }

        public Mission MarkAsCompleted(Guid TaskId)
        {
            Mission task = _context.Tasks
                .FirstOrDefault(x => x.Id == TaskId);
            if(task != null)
            {
                task.Completed = true;
            }
            _context.SaveChanges();
            return task;
        }
    }
}
