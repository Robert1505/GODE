using System;
using System.Collections.Generic;
using System.Text;

namespace GODE.DataAccess.Entities
{
    public class User
    {
        public User()
        {
            Goals = new List<Goal>();
            Tasks= new List<Mission>();
            Achievements = new List<Achievement>();
            ProgressOnDates = new List<ProgressOnDate>();
        }
        public Guid Id { get; set; }
        public string Username { get; set; }
        public virtual IList<Goal> Goals { get; set; }
        public virtual IList<Mission> Tasks { get; set; }
        public virtual IList<Achievement> Achievements { get; set; }
        public virtual IList<ProgressOnDate> ProgressOnDates { get; set; }
    }
}
