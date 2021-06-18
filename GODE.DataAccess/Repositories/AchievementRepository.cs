using GODE.DataAccess.Context;
using GODE.DataAccess.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace GODE.DataAccess.Repositories
{
    public interface IAchievementRepository
    {
        List<Achievement> GetAchievements();
        List<Achievement> GetUserAchievements(Guid UserId);
    }
    public class AchievementRepository : IAchievementRepository
    {
        private readonly GODEDbContext _context;
        public AchievementRepository(GODEDbContext context)
        {
            _context = context;
        }


        public List<Achievement> GetAchievements()
        {
            return _context.Achievements.OrderBy(x => x.Index).ToList();
        }

        public List<Achievement> GetUserAchievements(Guid UserId)
        {

            return _context.User
                .Include(x => x.Achievements)
                .FirstOrDefault(x => x.Id == UserId)
                .Achievements
                .ToList();
        }
    }
}
