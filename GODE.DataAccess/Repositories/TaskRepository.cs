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
        Mission CreateTask(Guid UserId, Mission task);
        List<Mission> GetTasks(Guid UserId);
        Mission AddProgress(Guid TaskId, int Minutes, Guid UserId);
        Mission MarkAsCompleted(Guid TaskId, Guid UserId);
        int TasksSolvedToday(Guid UserId);

        int TasksSolvedThisWeek(Guid UserId);
    }

    public class TaskRepository : ITaskRepository
    {

        private readonly GODEDbContext _context;
        public TaskRepository(GODEDbContext context)
        {
            _context = context;
        }

        public Mission AddProgress(Guid TaskId, int Minutes, Guid UserId)
        {
            Mission task = _context.Tasks
                .FirstOrDefault(x => x.Id == TaskId);

            User user = _context.User
                .Include(x => x.Tasks)
                .Include(x => x.Achievements)
                .FirstOrDefault(x => x.Id == UserId);

            int totalProgress = user.Tasks.Select(x => x.Progress).Sum();

            if(totalProgress >= 1000)
            {
                Achievement existingAchievement = user.Achievements.FirstOrDefault(x => x.Index == 9);
                if (existingAchievement == null)
                {
                    // putem sa adaugam achievement-ul
                    AddAchievement(user, 9);
                }
            }
            if(totalProgress >= 1500)
            {
                Achievement existingAchievement = user.Achievements.FirstOrDefault(x => x.Index == 11);
                if (existingAchievement == null)
                {
                    // putem sa adaugam achievement-ul
                    AddAchievement(user, 11);
                }
            }

            if(task != null)
            {
                task.Progress += Minutes; 
            }
            _context.SaveChanges();
            return task;
        }

        public Mission CreateTask(Guid UserId, Mission task)
        {
            Goal goal = _context.Goals
                .Include(x => x.Tasks)
                .FirstOrDefault(x => x.Id == task.GoalId);

            goal.Tasks.Add(task);

            User user = _context.User.FirstOrDefault(x => x.Id == UserId);
            user.Tasks.Add(task);

            _context.SaveChanges();
            return task;
        }

        public List<Mission> GetTasks(Guid UserId)
        {
            return _context.Tasks.Where(x => x.UserId == UserId).ToList();
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
            }
            _context.SaveChanges();


            Goal goal = _context.Goals
                .Include(x => x.Tasks)
                .FirstOrDefault(x => x.Id == task.GoalId);

            int tasksCompleted = _context.Tasks.Where(x => x.Completed == true && x.UserId == UserId).Count();
            int totalTasks = goal.Tasks.Count();

            if (tasksCompleted == totalTasks)
            {
                DateTime date = DateTime.Now;
                goal.ShortDate = date.ToShortDateString();
                goal.Completed = true;

                // Numaram cate obiective sunt completate

                int goalsCompleted = _context.Goals.Where(x => x.Completed == true && x.UserId == UserId).Count();
                int goalsCompletedImportant = _context.Goals.Where(x => x.Completed == true && x.UserId == UserId && x.Important == true).Count();
                AddGoalAchievements(user, goalsCompleted);
                AddImportantGoalAchievements(user, goalsCompletedImportant);

            }

            AddTaskAchievements(user, tasksCompleted);

            _context.SaveChanges();

            return task;
        }

        private void AddImportantGoalAchievements(User user, int goalsCompletedImportant)
        {
            if (goalsCompletedImportant == 150)
            {
                AddAchievement(user, 8);
            }
            else if (goalsCompletedImportant == 250)
            {
                AddAchievement(user, 10);
            }
        }

        private void AddTaskAchievements(User user, int tasksCompleted)
        {
            if (tasksCompleted == 100)
            {
                AddAchievement(user, 0);
            }
            else if (tasksCompleted == 500)
            {
                AddAchievement(user, 1);
            }
            else if (tasksCompleted == 1000)
            {
                AddAchievement(user, 2);
            }
            else if (tasksCompleted == 1500)
            {
                AddAchievement(user, 3);
            }
        }

        private void AddGoalAchievements(User user, int goalsCompleted)
        {
            if (goalsCompleted == 100)
            {
                AddAchievement(user, 4);
            }
            else if (goalsCompleted == 350)
            {
                AddAchievement(user, 5);
            }
            else if (goalsCompleted == 700)
            {
                AddAchievement(user, 6);
            }
            else if (goalsCompleted == 1000)
            {
                AddAchievement(user, 7);
            }
        }

        private void AddAchievement(User user, int achievementIndex)
        {
            Achievement achievement = _context.Achievements.FirstOrDefault(x => x.Index == achievementIndex);

            user.Achievements.Add(achievement);
            
        }

        public int TasksSolvedToday(Guid UserId)
        {
            DateTime date = DateTime.Now;
            string shortDate = date.ToShortDateString();
            int tasksSolved = _context.Tasks.Where(x => x.ShortDate == shortDate && x.UserId == UserId).Count();
            return tasksSolved;
        }

        public int TasksSolvedThisWeek(Guid UserId)
        {
            DateTime date = DateTime.Now;
            int tasksSolvedThisWeek = 0;
            for(int i = 0; i < 7; i++)
            {
                tasksSolvedThisWeek += TasksSolvedOnDate(UserId, date.AddDays(-i));
            }
            return tasksSolvedThisWeek;
        }

        public int TasksSolvedOnDate(Guid UserId, DateTime date)
        {
            string shortDate = date.ToShortDateString();
            int tasksSolved = _context.Tasks.Where(x => x.ShortDate == shortDate && x.UserId == UserId).Count();
            return tasksSolved;
        }
    }
}
