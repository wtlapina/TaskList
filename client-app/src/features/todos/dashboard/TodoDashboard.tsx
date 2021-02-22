import React from "react";
import { Grid } from "semantic-ui-react";
import { ITodo } from "../../../app/models/todo";
import TodoForm from "../form/TodoForm";
import TodoList from "./TodoList";

interface IProps {
  toDos: ITodo[];
  createTodo: (todo: ITodo) => void;
  deleteTodo: (id: string) => void;
  completeTodo: (toDo: ITodo) => void;
}

export const TodoDashboard: React.FC<IProps> = ({
  toDos,
  createTodo,
  deleteTodo,
  completeTodo
}) => {
  return (
    <Grid>
      <Grid.Column width={16}>
        <TodoForm createTodo={createTodo} />
        <TodoList
          toDos={toDos}
          deleteTodo={deleteTodo}
          completeTodo={completeTodo}
        />
      </Grid.Column>
    </Grid>
  );
};
