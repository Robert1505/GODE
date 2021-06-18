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
    public class TaskController : ControllerBase
    {
        private readonly ITaskManager _taskManager;
        public TaskController(ITaskManager taskManager)
        {
            _taskManager = taskManager;
        }
        [HttpPost]
        [Route ("create/{UserId}")]
        public IActionResult CreateTask(Guid UserId, Mission task)
        {
            return Ok(_taskManager.CreateTask(UserId,task));
        }
        [HttpGet]
        [Route("get/{UserId}")]
        public IActionResult GetTask(Guid UserId)
        {
            return Ok(_taskManager.GetTasks( UserId));
        }
        [HttpPost]
        [Route("addProgress/{UserId}")]
        public IActionResult AddProgress(TaskProgressModel model, Guid UserId)
        {
            return Ok(_taskManager.AddProgress(model.TaskId, model.Minutes, UserId));
        }

        [HttpPost]
        [Route("markAsCompleted/{TaskId}/{UserId}")]
        public IActionResult MarkAsCompleted(Guid TaskId, Guid UserId)
        {
            return Ok(_taskManager.MarkAsCompleted(TaskId, UserId));
        }

        [HttpGet]
        [Route("tasksSolvedToday/{UserId}")]
        public IActionResult TasksSolved(Guid UserId)
        {
            return Ok(_taskManager.TasksSolvedToday(UserId));
        }
    }
}
