using GODE.DataAccess.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace GODE.DataAccess.Context
{
    public class GODEDbContext : DbContext
    {
        public GODEDbContext(DbContextOptions<GODEDbContext> options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<User>().HasData(
                 new User()
                 {
                     Id = Guid.NewGuid(),
                     Username = "Robert"
                 });
            modelBuilder.Entity<Achievement>().HasData(
                new Achievement
                {
                    Id = Guid.NewGuid(),
                    Title = "100 TASKS COMPLETED",
                    Description = "Complete 100 tasks to reach this achievement!",
                    Index = 0
                },
                new Achievement
                {
                    Id = Guid.NewGuid(),
                    Title = "500 TASKS COMPLETED",
                    Description = "Complete 500 tasks to reach this achievement!",
                    Index = 1
                },
                 new Achievement
                 {
                     Id = Guid.NewGuid(),
                     Title = "1000 TASKS COMPLETED",
                     Description = "Complete 1000 tasks to reach this achievement!",
                     Index = 2
                 },
                 new Achievement
                 {
                     Id = Guid.NewGuid(),
                     Title = "1500 TASKS COMPLETED",
                     Description = "Complete 1500 tasks to reach this achievement!",
                     Index = 3
                 },
                 new Achievement
                 {
                     Id = Guid.NewGuid(),
                     Title = "100 GOALS COMPLETED",
                     Description = "Complete 100 goals to reach this achievement!",
                     Index = 4
                 },
                 new Achievement
                 {
                     Id = Guid.NewGuid(),
                     Title = "350 GOALS COMPLETED",
                     Description = "Complete 350 goals to reach this achievement!",
                     Index = 5
                 },
                 new Achievement
                 {
                     Id = Guid.NewGuid(),
                     Title = "700 GOALS COMPLETED",
                     Description = "Complete 700 goals to reach this achievement!",
                     Index = 6
                 },
                 new Achievement
                 {
                     Id = Guid.NewGuid(),
                     Title = "1000 GOALS COMPLETED",
                     Description = "Complete 1000 goals to reach this achievement!",
                     Index = 7
                 },
                 new Achievement
                 {
                     Id = Guid.NewGuid(),
                     Title = "150 IMPORTANT GOALS COMPLETED",
                     Description = "Complete 150 important goals to reach this achievement!",
                     Index = 8
                 },
                 new Achievement
                 {
                     Id = Guid.NewGuid(),
                     Title = "1000 MINUTES OF PROGRESS",
                     Description = "Earn 1000 minutes of progress to reach this achievement!",
                     Index = 9
                 },
                 new Achievement
                 {
                     Id = Guid.NewGuid(),
                     Title = "250 IMPORTANT GOALS COMPLETED",
                     Description = "Complete 250 important goals to reach this achievement!",
                     Index = 10
                 },
                 new Achievement
                 {
                     Id = Guid.NewGuid(),
                     Title = "1500 MINUTES OF PROGRESS",
                     Description = "Earn 1500 minutes of progress to reach this achievement!",
                     Index = 11
                 }
            );
        }

        public DbSet<Goal> Goals { get; set; }
        public DbSet<Mission> Tasks { get; set; }
        public DbSet<ProgressOnDate> ProgressOnDates { get; set; }
        public DbSet<Achievement> Achievements { get; set; }
        public DbSet<User> User { get; set; }
    }
}
