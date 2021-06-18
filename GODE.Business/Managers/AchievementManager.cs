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
        List<Achievement> GetUserAchievements(Guid UserId);
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

        public List<Achievement> GetUserAchievements(Guid UserId)
        {
            return _achievementRepository.GetUserAchievements(UserId);
        }
    }
}
