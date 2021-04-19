using System;
using System.Collections.Generic;
using System.Text;

namespace GODE.DataAccess.Entities
{
    public class Goal
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string ShortDate { get; set; }
        public virtual ICollection<Mission> Tasks { get; set; }
    }
}
