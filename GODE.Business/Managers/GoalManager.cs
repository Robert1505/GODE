using GODE.DataAccess.Entities;
using GODE.DataAccess.Repositories;
using System;
using System.Collections.Generic;
using System.Text;

namespace GODE.Business.Managers
{
    public interface IGoalManager
    {
        Goal CreateGoal(Goal goal);
    }
    public class GoalManager : IGoalManager
    {
        private readonly IGoalRepository _goalRepository;
        public GoalManager(IGoalRepository goalRepository)
        {
            _goalRepository = goalRepository;
        }

        public Goal CreateGoal(Goal goal)
        {
            return _goalRepository.CreateGoal(goal);
        }
    }
}
