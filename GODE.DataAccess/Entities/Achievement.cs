using System;
using System.Collections.Generic;
using System.Text;

namespace GODE.DataAccess.Entities
{
    public class Achievement
    {
        public Achievement()
        {
            Users = new List<User>();
        }
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public int Index { get; set; }
        public virtual IList<User> Users { get; set; }
    }
}
