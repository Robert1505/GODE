using GODE.DataAccess.Entities;
using GODE.DataAccess.Repositories;
using System;
using System.Collections.Generic;
using System.Text;

namespace GODE.Business.Managers
{
    public interface IProgressOnDateManager
    {
        ProgressOnDate AddProgress(ProgressOnDate progressOnDate);
        ProgressOnDate GetProgress(DateTime date, Guid UserId);
        int GetWeeklyProgress(Guid UserId);
    }
    public class ProgressOnDateManager : IProgressOnDateManager
    {
        private readonly IProgressOnDateRepository _progressOnDateRepository;
        public ProgressOnDateManager(IProgressOnDateRepository  progressOnDateRepository)
        {
            _progressOnDateRepository = progressOnDateRepository;
        }

        public ProgressOnDate AddProgress(ProgressOnDate progressOnDate)
        {
            return _progressOnDateRepository.AddProgress(progressOnDate);
        }

        public ProgressOnDate GetProgress(DateTime date, Guid UserId)
        {
            return _progressOnDateRepository.GetProgress(date, UserId);
        }

        public int GetWeeklyProgress(Guid UserId)
        {
            return _progressOnDateRepository.GetWeeklyProgress(UserId);
        }
    }
}
