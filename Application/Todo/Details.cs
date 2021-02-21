using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Todo
{
    public class Details
    {
        public class Query : IRequest<TodoList>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, TodoList>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<TodoList> Handle(Query request, CancellationToken cancellationToken)
            {
                var todo = await _context.TTodoList.FindAsync(request.Id);

                return todo;
            }
        }
    }
}