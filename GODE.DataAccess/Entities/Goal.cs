using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace GODE.DataAccess.Entities
{
    public class Goal
    {
        public Goal()
        {
        }
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string ShortDate { get; set; }
        public bool Completed { get; set; }
        public bool Important { get; set; }
        public virtual ICollection<Mission> Tasks { get; set; }

        [ForeignKey("User")]
        public Guid UserId { get; set; }
        public virtual User User { get; set; }


    }
}
