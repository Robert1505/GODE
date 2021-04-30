﻿using GODE.DataAccess.Context;
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
        Goal CreateGoal(Goal goal);
        List<Goal> GetGoals();
        Guid DeleteGoal(Goal goal);
        Goal UpdateGoal(Goal goal);
        int GoalsSolvedToday();
    }
    public class GoalRepository : IGoalRepository
    {
        private readonly GODEDbContext _context;
        public GoalRepository(GODEDbContext context)
        {
            _context = context;
        }
        public Goal CreateGoal(Goal goal)
        {
            _context.Goals.Add(goal);
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

        public List<Goal> GetGoals()
        {

            return _context.Goals.Include(x => x.Tasks).ToList();
        }

        public Goal UpdateGoal(Goal goal)
        {
            _context.Goals.Update(goal);
            _context.SaveChanges();
            return goal;
        }

        public int GoalsSolvedToday()
        {
            DateTime date = DateTime.Now;
            string shortDate = date.ToShortDateString();
            int goalsSolved = _context.Goals.Where(x => x.ShortDate == shortDate).Count();
            return goalsSolved;
        }
    }
}
