using System;
using System.Collections.Generic;
using System.Text;

namespace GODE.DataAccess.Entities
{
    public class Goal
    {
        public Goal()
        {
            Users = new List<User>();
        }
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string ShortDate { get; set; }
        public bool Completed { get; set; }
        public bool Important { get; set; }
        public virtual ICollection<Mission> Tasks { get; set; }
        public virtual IList<User> Users { get; set; }
    }
}
