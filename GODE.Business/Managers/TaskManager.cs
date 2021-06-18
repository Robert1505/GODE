using GODE.DataAccess.Entities;
using GODE.DataAccess.Repositories;
using System;
using System.Collections.Generic;
using System.Text;

namespace GODE.Business.Managers
{
    public interface ITaskManager
    {
        Mission CreateTask(Guid UserId, Mission task);
        List<Mission> GetTasks(Guid UserId);

        Mission AddProgress(Guid TaskId, int Minutes, Guid UserId);
        Mission MarkAsCompleted(Guid TaskId, Guid UserId );
        int TasksSolvedToday(Guid UserId);

        int TasksSolvedThisWeek(Guid UserId);
    }
    public class TaskManager : ITaskManager
    {
        private readonly ITaskRepository _taskRepository;
        public TaskManager(ITaskRepository taskRepository)
        {
            _taskRepository = taskRepository;
        }

        public Mission AddProgress(Guid TaskId, int Minutes, Guid UserId)
        {
            return _taskRepository.AddProgress(TaskId, Minutes,  UserId);
        }

        public Mission CreateTask(Guid UserId, Mission task)
        {
            return _taskRepository.CreateTask(UserId,task);
        }

        public List<Mission> GetTasks(Guid UserId)
        {
            return _taskRepository.GetTasks(UserId);
        }

        public Mission MarkAsCompleted(Guid TaskId, Guid UserId)
        {
            return _taskRepository.MarkAsCompleted(TaskId, UserId);
        }

        public int TasksSolvedThisWeek(Guid UserId)
        {
            return _taskRepository.TasksSolvedThisWeek(UserId);
        }

        public int TasksSolvedToday(Guid UserId)
        {
            return _taskRepository.TasksSolvedToday(UserId);
        }
    }
}
