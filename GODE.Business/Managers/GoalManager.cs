using GODE.DataAccess.Entities;
using GODE.DataAccess.Repositories;
using System;
using System.Collections.Generic;
using System.Text;

namespace GODE.Business.Managers
{
    public interface IGoalManager
    {
        Goal CreateGoal(Guid UserId, Goal goal);
        List<Goal> GetGoals(Guid UserId);
        int GoalsSolvedToday(Guid UserId);
        int GoalsSolvedThisWeek(Guid UserId);
    }
    public class GoalManager : IGoalManager
    {
        private readonly IGoalRepository _goalRepository;
        public GoalManager(IGoalRepository goalRepository)
        {
            _goalRepository = goalRepository;
        }

        public Goal CreateGoal(Guid UserId, Goal goal)
        {
            return _goalRepository.CreateGoal(UserId,goal);
        }

        public List<Goal> GetGoals(Guid UserId)
        {
            return _goalRepository.GetGoals( UserId);
        }

        public int GoalsSolvedThisWeek(Guid UserId)
        {
            return _goalRepository.GoalsSolvedThisWeek(UserId);
        }

        public int GoalsSolvedToday(Guid UserId)
        {
            return _goalRepository.GoalsSolvedToday( UserId);
        }
    }
}
