using System;
using System.Collections.Generic;
using System.Text;

namespace GODE.DataAccess.Entities
{
    public class ProgressOnDate
    {
        public Guid Id { get; set; }
        public DateTime Date { get; set; }
        public string ShortDate { get; set; }
        public int Minutes { get; set; }
    }
}
