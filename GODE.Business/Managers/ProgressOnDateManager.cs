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
        ProgressOnDate GetProgress(DateTime date);
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

        public ProgressOnDate GetProgress(DateTime date)
        {
            return _progressOnDateRepository.GetProgress(date);
        }
    }
}
