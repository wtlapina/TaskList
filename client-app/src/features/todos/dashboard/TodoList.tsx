import React, { useState } from "react";
import { Button, Image, Item, Segment } from "semantic-ui-react";
import { ITodo } from "../../../app/models/todo";
import TodoForm from "../form/TodoForm";

interface IProps {
  toDos: ITodo[];
  deleteTodo: (id: string) => void;
  completeTodo: (toDo: ITodo) => void;
}

const TodoList: React.FC<IProps> = ({
  toDos,
  deleteTodo,
  completeTodo
}) => {
  const handleComplete = (id: string) => {
    let toDoz = {...toDos.filter((a) => a.id === id)[0], status: "Completed"};
    completeTodo(toDoz);
  };

  return (
    <Segment clearing>
      <Item.Group divided>
        {toDos.map((toDo) => (
          <Item key={toDo.id}>
            <Item.Content>
              <Item.Header
                className={toDo.status === "Completed" ? "crossed-line" : ""}
              >
                {toDo.taskName} {toDo.status}
              </Item.Header>
              <Item.Extra>
                <Button
                  onClick={() => handleComplete(toDo.id)}
                  size="mini"
                  floated="right"
                  content="Complete"
                  color="blue"
                />
                <Button
                  onClick={() => deleteTodo(toDo.id)}
                  size="mini"
                  floated="right"
                  content="Delete"
                  color="red"
                />
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  );
};

export default TodoList;
