using GODE.Business.Managers;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GODE.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AchievementController : ControllerBase
    {
        private readonly IAchievementManager _achievementManager;
        public AchievementController(IAchievementManager achievementManager)
        {
            _achievementManager = achievementManager;
        }

        [HttpGet]
        [Route("getAchievements")]
        public IActionResult GetAchievements()
        {
            return Ok(_achievementManager.GetAchievements());
        }
        
        [HttpGet]
        [Route("getUserAchievements/{UserId}")]
        public IActionResult GetUserAchievements(Guid UserId)
        {
            return Ok(_achievementManager.GetUserAchievements(UserId));
        }
    }
}
