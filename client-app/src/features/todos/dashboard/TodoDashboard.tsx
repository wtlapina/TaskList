import React, { SyntheticEvent } from "react";
import { Grid } from "semantic-ui-react";
import { ITodo } from "../../../app/models/todo";
import TodoForm from "../form/TodoForm";
import TodoList from "./TodoList";

interface IProps {
  toDos: ITodo[];
  createTodo: (buttonName: string, todo: ITodo) => void;
  deleteTodo: (e: SyntheticEvent<HTMLButtonElement>, id: string) => void;
  completeTodo: (e: SyntheticEvent<HTMLButtonElement>, toDo: ITodo) => void;
  submitting: boolean;
  target: string
}

export const TodoDashboard: React.FC<IProps> = ({
  toDos,
  createTodo,
  deleteTodo,
  completeTodo,
  submitting,
  target,
}) => {
  return (
    <Grid>
      <Grid.Column width={16}>
        <TodoForm createTodo={createTodo} submitting={submitting} target={target} />
        <TodoList
          toDos={toDos}
          deleteTodo={deleteTodo}
          completeTodo={completeTodo}
          target={target}
          submitting={submitting}
        />
      </Grid.Column>
    </Grid>
  );
};
