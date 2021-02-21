using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;
using Domain;

namespace Application.Todo
{
    public class List
    {
        public class Query : IRequest<List<TodoList>>
        {

        }

        public class Handler : IRequestHandler<Query, List<TodoList>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;

            }
            public async Task<List<TodoList>> Handle(Query request, CancellationToken cancellationToken)
            {
                var todos = await _context.TTodoList.ToListAsync();

                return todos;
            }
        }
    }
}