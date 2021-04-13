using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GODE.Controllers.Models
{
    public class TaskProgressModel
    {
        public Guid TaskId { get; set; }
        public int Minutes { get; set; }
    }
}
