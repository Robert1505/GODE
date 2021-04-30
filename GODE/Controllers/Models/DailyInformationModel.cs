using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GODE.Controllers.Models
{
    public class DailyInformationModel
    {
        public int GoalsCompleted { get; set; }
        public int TasksCompleted { get; set; }
        public int ProgressInMinutes { get; set; }
    }
}
