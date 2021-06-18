using GODE.Business.Managers;
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
    public class GoalController : ControllerBase
    {
        private readonly IGoalManager _goalManager;
        public GoalController(IGoalManager goalManager)
        {
            _goalManager = goalManager;
        }

        [HttpPost]
        [Route("create/{UserId}")]
        public IActionResult CreateGoal(Goal goal, Guid UserId)
        {
            return Ok(_goalManager.CreateGoal(UserId,goal));
        }

        [HttpGet]
        [Route("get/{UserId}")]
        public IActionResult GetGoals(Guid UserId)
        {
            return Ok(_goalManager.GetGoals(UserId));
        }

        [HttpGet]
        [Route("goalsSolvedToday/{UserId}")]
        public IActionResult GoalsSolved(Guid UserId)
        {
            return Ok(_goalManager.GoalsSolvedToday(UserId));
        }
    }
}
