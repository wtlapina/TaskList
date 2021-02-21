using System;
using System.Collections.Generic;
using System.Linq;
using Domain;

namespace Persistence
{
    public class Seed
    {
        public static void SeedData(DataContext context)
        {
            if(!context.TTodoList.Any())
            {
                var todos = new List<TodoList>
                {
                    new TodoList
                    {
                        TaskName = "Task 1",
                        DateCreated = DateTime.Now,
                        Status = "Created"
                    },
                    new TodoList
                    {
                        TaskName = "Task 2",
                        DateCreated = DateTime.Now,
                        Status = "Created"
                    },
                    new TodoList
                    {
                        TaskName = "Task 3",
                        DateCreated = DateTime.Now,
                        Status = "Created"
                    },
                    new TodoList
                    {
                        TaskName = "Task 4",
                        DateCreated = DateTime.Now,
                        Status = "Completed"
                    }
                };

                context.TTodoList.AddRange(todos);
                context.SaveChanges();
            }
        }
    }
}