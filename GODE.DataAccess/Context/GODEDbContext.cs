using GODE.DataAccess.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace GODE.DataAccess.Context
{
    public class GODEDbContext : DbContext
    {
        public GODEDbContext(DbContextOptions<GODEDbContext> options): base(options)
        {

        }

        public DbSet<Goal> Goals { get; set; }
        public DbSet<Mission> Tasks { get; set; }

    }
}
