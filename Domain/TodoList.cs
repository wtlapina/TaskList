using System;

namespace Domain
{
    public class TodoList
    {
        public Guid Id { get; set; }
        public string TaskName { get; set; }
        public DateTime DateCreated { get; set; }
        public string Status { get; set; }
    }
}