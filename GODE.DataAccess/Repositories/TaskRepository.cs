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
        Mission MarkAsCompleted(Guid TaskId, Guid UserId);
        int TasksSolvedToday();
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

        public Mission MarkAsCompleted(Guid TaskId, Guid UserId)
        {
            Mission task = _context.Tasks
                .FirstOrDefault(x => x.Id == TaskId);

            User user = _context.User.FirstOrDefault(x => x.Id == UserId);

            if (task != null)
            {
                task.Completed = true;
                DateTime date = DateTime.Now;
                task.ShortDate = date.ToShortDateString();
                user.TasksCompleted.Add(task);
            }
            _context.SaveChanges();


            Goal goal = _context.Goals
                .Include(x => x.Tasks)
                .FirstOrDefault(x => x.Id == task.GoalId);

            int tasksCompleted = goal.Tasks.Where(x => x.Completed == true).Count();
            int totalTasks = goal.Tasks.Count();

            if(tasksCompleted == totalTasks)
            {
                DateTime date = DateTime.Now;
                goal.ShortDate = date.ToShortDateString();
                goal.Completed = true;
            }
            _context.SaveChanges();

            return task;
        }

        public int TasksSolvedToday()
        {
            DateTime date = DateTime.Now;
            string shortDate = date.ToShortDateString();
            int tasksSolved = _context.Tasks.Where(x => x.ShortDate == shortDate).Count();
            return tasksSolved;
        }
    }
}
