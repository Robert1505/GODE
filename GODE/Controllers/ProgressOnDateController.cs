using GODE.Business.Managers;
using GODE.Controllers.Models;
using GODE.DataAccess.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GODE.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProgressOnDateController : ControllerBase
    {
        private readonly IProgressOnDateManager _progressOnDateManager;
        private readonly IGoalManager _goalManager;
        private readonly ITaskManager _taskManager;
        public ProgressOnDateController(IProgressOnDateManager progressOnDateManager, IGoalManager goalManager, ITaskManager taskManager)
        {
            _progressOnDateManager = progressOnDateManager;
            _goalManager = goalManager;
            _taskManager = taskManager;
        }
        [HttpPost]
        [Route("get")]
        public IActionResult Get(DateTimeModel model)
        {
            return Ok(_progressOnDateManager.GetProgress(model.Date));
        }

        [HttpPost]
        [Route ("add")]
        public IActionResult Add(ProgressOnDate progressOnDate)
        {
            return Ok(_progressOnDateManager.AddProgress(progressOnDate));
        }

        [HttpPost]
        [Route("getDailyInformation")]
        public IActionResult GetDailyInformation(DateTimeModel model)
        {
            DailyInformationModel response = new DailyInformationModel();
            response.GoalsCompleted = _goalManager.GoalsSolvedToday();
            response.TasksCompleted = _taskManager.TasksSolvedToday();
            response.ProgressInMinutes = _progressOnDateManager.GetProgress(model.Date).Minutes;
            return Ok(response);
        }
        
    }
}
