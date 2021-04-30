using GODE.DataAccess.Entities;
using GODE.DataAccess.Repositories;
using System;
using System.Collections.Generic;
using System.Text;

namespace GODE.Business.Managers
{
    public interface IAchievementManager
    {
        List<Achievement> GetAchievements();
    }
    public class AchievementManager : IAchievementManager
    {
        private readonly IAchievementRepository _achievementRepository;
        public AchievementManager(IAchievementRepository achievementRepository)
        {
            _achievementRepository = achievementRepository;
        }
        public List<Achievement> GetAchievements()
        {
            return _achievementRepository.GetAchievements();
        }
    }
}
