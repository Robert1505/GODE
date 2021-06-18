using GODE.DataAccess.Context;
using GODE.DataAccess.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace GODE.DataAccess.Repositories
{
    public interface IGoalRepository
    {
        Goal CreateGoal(Guid UserId, Goal goal);
        List<Goal> GetGoals(Guid UserId);
        Guid DeleteGoal(Goal goal);
        Goal UpdateGoal(Goal goal);
        int GoalsSolvedToday(Guid UserId);
        int GoalsSolvedThisWeek(Guid UserId);
    }
    public class GoalRepository : IGoalRepository
    {
        private readonly GODEDbContext _context;
        public GoalRepository(GODEDbContext context)
        {
            _context = context;
        }
        public Goal CreateGoal(Guid UserId, Goal goal)
        {
            //_context.Goals.Add(goal);
            
            goal.UserId = UserId;
            User user = _context.User.FirstOrDefault(x => x.Id == UserId);
            user.Goals.Add(goal);
            _context.SaveChanges();
            return goal;
        }

        public Guid DeleteGoal(Goal goal)
        {
            Guid id = goal.Id;
            _context.Goals.Remove(goal);
            _context.SaveChanges();
            return id;
        }

        public List<Goal> GetGoals(Guid UserId)
        {

            return _context.Goals.Where(x => x.UserId == UserId).Include(x => x.Tasks).ToList();
        }

        public Goal UpdateGoal(Goal goal)
        {
            _context.Goals.Update(goal);
            _context.SaveChanges();
            return goal;
        }

        public int GoalsSolvedToday(Guid UserId)
        {
            DateTime date = DateTime.Now;
            string shortDate = date.ToShortDateString();
            int goalsSolved = _context.Goals.Where(x => x.ShortDate == shortDate && x.UserId == UserId).Count();
            return goalsSolved;
        }

        public int GoalsSolvedThisWeek(Guid UserId)
        {
            int totalGoalsSolved = 0;
            DateTime date = DateTime.Now;
            DateTime[] previousDays = new DateTime[7];
            for (int i = 0; i < 7; i++)
            {
                previousDays[i] = date.AddDays(-i);
                totalGoalsSolved += GoalsSolvedOnDate(UserId, previousDays[i]);
            }
            return totalGoalsSolved;
        }
        public int GoalsSolvedOnDate(Guid UserId, DateTime date)
        {
            string shortDate = date.ToShortDateString();
            int goalsSolved = _context.Goals.Where(x => x.ShortDate == shortDate && x.UserId == UserId).Count();
            return goalsSolved;
        }

    }
}
