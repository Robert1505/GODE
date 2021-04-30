using GODE.DataAccess.Context;
using GODE.DataAccess.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace GODE.DataAccess.Repositories
{
    public interface IAchievementRepository
    {
        List<Achievement> GetAchievements();
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
    }
}
