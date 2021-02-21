using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Todo;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TodosController : ControllerBase
    {
        private readonly IMediator _mediator;
        public TodosController(IMediator mediator)
        {
            _mediator = mediator;
        }

        public async Task<ActionResult<List<TodoList>>> List()
        {
            return await _mediator.Send(new List.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<TodoList>> Detials(Guid id)
        {
            return await _mediator.Send(new Details.Query { Id = id });
        }

        [HttpPost]
        public async Task<ActionResult<Unit>> Create(Create.Command command)
        {
            return await _mediator.Send(command);
        }

        [HttpPut("status/{id}")]
        public async Task<ActionResult<Unit>> Status(Guid id, Status.Command Command)
        {
            Command.Id = id;
            return await _mediator.Send(Command);
        }

        [HttpPut("edit/{id}")]
        public async Task<ActionResult<Unit>> Edit(Guid id, Edit.Command Command)
        {
            Command.Id = id;
            return await _mediator.Send(Command);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Unit>> Delete(Guid id)
        {
            return await _mediator.Send(new Delete.Command { Id = id });
        }

    }
}