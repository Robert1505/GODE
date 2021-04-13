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
        public ProgressOnDateController(IProgressOnDateManager progressOnDateManager)
        {
            _progressOnDateManager = progressOnDateManager;
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
        
    }
}
