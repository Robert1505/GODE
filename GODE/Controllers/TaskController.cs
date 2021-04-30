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
        [Route ("create")]
        public IActionResult CreateTask(Mission task)
        {
            return Ok(_taskManager.CreateTask(task));
        }
        [HttpGet]
        [Route("get")]
        public IActionResult GetTask()
        {
            return Ok(_taskManager.GetTask());
        }
        [HttpPost]
        [Route("addProgress")]
        public IActionResult AddProgress(TaskProgressModel model)
        {
            return Ok(_taskManager.AddProgress(model.TaskId, model.Minutes));
        }

        [HttpPost]
        [Route("markAsCompleted/{TaskId}")]
        public IActionResult MarkAsCompleted(Guid TaskId, Guid UserId)
        {
            return Ok(_taskManager.MarkAsCompleted(TaskId, UserId));
        }

        [HttpGet]
        [Route("tasksSolvedToday")]
        public IActionResult TasksSolved()
        {
            return Ok(_taskManager.TasksSolvedToday());
        }
    }
}
