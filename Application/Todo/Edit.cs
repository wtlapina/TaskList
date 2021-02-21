using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.Todo
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }
            public string TaskName { get; set; }
            public DateTime DateCreated { get; set; }
            public string Status { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var todo = await _context.TTodoList.FindAsync(request.Id);

                if (todo == null)
                    throw new Exception("Could not find task");

                todo.TaskName = request.TaskName ?? todo.TaskName;

                var success = await _context.SaveChangesAsync() > 0;

                if (success) return Unit.Value;

                throw new Exception("Problem saving changes edit");
            }
        }
    }
}