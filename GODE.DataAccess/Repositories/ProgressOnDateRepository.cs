using GODE.DataAccess.Context;
using GODE.DataAccess.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace GODE.DataAccess.Repositories
{
    public interface IProgressOnDateRepository
    {
        ProgressOnDate AddProgress(ProgressOnDate progressOnDate);
        ProgressOnDate GetProgress(DateTime date);
    }
    public class ProgressOnDateRepository : IProgressOnDateRepository
    {
        private readonly GODEDbContext _context;
        public ProgressOnDateRepository(GODEDbContext context)
        {
            _context = context;
        }
        public ProgressOnDate AddProgress(ProgressOnDate progressOnDate)
        {
            progressOnDate.ShortDate = progressOnDate.Date.ToShortDateString();

            ProgressOnDate foundProgress = _context.ProgressOnDates.FirstOrDefault(x => x.ShortDate == progressOnDate.ShortDate);

            if (foundProgress == null)
            {
                // nu am gasit
                _context.ProgressOnDates.Add(progressOnDate);
            } 
            else
            {
                // exista deja
                foundProgress.Minutes += progressOnDate.Minutes;
            }
           
            _context.SaveChanges();
            return progressOnDate;
        }

        public ProgressOnDate GetProgress(DateTime date)
        {
            string shortDate = date.ToShortDateString();

            ProgressOnDate foundProgress = _context.ProgressOnDates.FirstOrDefault(x => x.ShortDate == shortDate);
            if (foundProgress == null)
            {
                return new ProgressOnDate()
                {
                    ShortDate = shortDate,
                    Minutes = 0
                };
            }
            return foundProgress;
        }
    }
}
