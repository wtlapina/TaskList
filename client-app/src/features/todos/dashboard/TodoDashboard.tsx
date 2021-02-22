import React from "react";
import { Grid } from "semantic-ui-react";
import { ITodo } from "../../../app/models/todo";
import TodoForm from "../form/TodoForm";
import TodoList from "./TodoList";

interface IProps {
  todos: ITodo[];
  createTodo: (todo: ITodo) => void;
}

export const TodoDashboard: React.FC<IProps> = ({ todos, createTodo }) => {
  return (
    <Grid>
      <Grid.Column width={16}>
          <TodoForm createTodo={createTodo} />
          <TodoList todos={todos} />
      </Grid.Column>
    </Grid>
  );
};
