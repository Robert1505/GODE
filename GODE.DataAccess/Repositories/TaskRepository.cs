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
    }

    public class TaskRepository : ITaskRepository
    {

        private readonly GODEDbContext _context;
        public TaskRepository(GODEDbContext context)
        {
            _context = context;
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
    }
}
