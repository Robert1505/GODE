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
        [Route("get/{UserId}")]
        public IActionResult Get(DateTimeModel model, Guid UserId)
        {
            return Ok(_progressOnDateManager.GetProgress(model.Date, UserId));
        }

        [HttpPost]
        [Route ("add")]
        public IActionResult Add(ProgressOnDate progressOnDate)
        {
            return Ok(_progressOnDateManager.AddProgress(progressOnDate));
        }

        [HttpPost]
        [Route("getDailyInformation/{UserId}")]
        public IActionResult GetDailyInformation(DateTimeModel model, Guid UserId)
        {
            ProgressInformationModel response = new ProgressInformationModel();
            response.GoalsCompleted = _goalManager.GoalsSolvedToday(UserId);
            response.TasksCompleted = _taskManager.TasksSolvedToday(UserId);
            response.ProgressInMinutes = _progressOnDateManager.GetProgress(model.Date, UserId).Minutes;
            return Ok(response);
        }
        [HttpPost]
        [Route("getWeeklyInformation/{UserId}")]
        public IActionResult GetWeeklyInformation(DateTimeModel model, Guid UserId)
        {
            ProgressInformationModel response = new ProgressInformationModel();
            response.GoalsCompleted = _goalManager.GoalsSolvedThisWeek(UserId);
            response.TasksCompleted = _taskManager.TasksSolvedThisWeek(UserId);
            response.ProgressInMinutes = _progressOnDateManager.GetWeeklyProgress(UserId);
            return Ok(response);
        }

    }
}
