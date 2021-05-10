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
    public class UserController : ControllerBase
    {
        private readonly IUserManager _userManager;
        public UserController(IUserManager userManager)
        {
            _userManager = userManager;
        }

        [HttpPost]
        [Route ("create")]
        public IActionResult Create(User user)
        {
            _userManager.Create(user);
            return Ok();
        }

        [HttpGet]
        [Route ("getAll")]
        public IActionResult Get()
        {
            return Ok(_userManager.GetAll());
        }
    }
}
