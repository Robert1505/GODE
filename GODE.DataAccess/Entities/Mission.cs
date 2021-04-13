using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace GODE.DataAccess.Entities
{
    public class Mission
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public bool Completed { get; set; }
        public int EstimatedTime { get; set; }
        public int Progress { get; set; }

        [ForeignKey("Goal")]
        public Guid GoalId { get; set; }
        public Goal Goal { get; set; }
    }
}