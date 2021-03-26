using GODE.DataAccess.Entities;
using GODE.DataAccess.Repositories;
using System;
using System.Collections.Generic;
using System.Text;

namespace GODE.Business.Managers
{
    public interface ITaskManager
    {
        Mission CreateTask(Mission task);
        List<Mission> GetTask();
    }
    public class TaskManager : ITaskManager
    {
        private readonly ITaskRepository _taskRepository;
        public TaskManager(ITaskRepository taskRepository)
        {
            _taskRepository = taskRepository;
        }
        public Mission CreateTask(Mission task)
        {
            return _taskRepository.CreateTask(task);
        }

        public List<Mission> GetTask()
        {
            return _taskRepository.GetTask();
        }
    }
}
