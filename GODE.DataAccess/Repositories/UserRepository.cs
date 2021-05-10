using GODE.DataAccess.Context;
using GODE.DataAccess.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace GODE.DataAccess.Repositories
{
    
    public interface IUserRepository
    {
        void Create(User user);
        List<User> GetAll();
    }
    public class UserRepository : IUserRepository
    {
        private readonly GODEDbContext _context;
        public UserRepository(GODEDbContext context)
        {
            _context = context;
        }
        public void Create(User user)
        {
            _context.User.Add(user);
            _context.SaveChanges();
        }

        public List<User> GetAll()
        {
            return _context.User.ToList();
        }
    }

}
