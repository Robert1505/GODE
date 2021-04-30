using System;
using System.Collections.Generic;
using System.Text;

namespace GODE.DataAccess.Entities
{
    public class User
    {
        public User()
        {
            GoalsCompleted = new List<Goal>();
            TasksCompleted = new List<Mission>();
            Achievements = new List<Achievement>();
        }
        public Guid Id { get; set; }
        public string Username { get; set; }
        public virtual IList<Goal> GoalsCompleted { get; set; }
        public virtual IList<Mission> TasksCompleted { get; set; }
        public virtual IList<Achievement> Achievements { get; set; }
    }
}
