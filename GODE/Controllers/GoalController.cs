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
        [Route("create")]
        public IActionResult CreateGoal(Goal goal)
        {
            return Ok(_goalManager.CreateGoal(goal));
        }

    }
}
