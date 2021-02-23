import React, { SyntheticEvent, useState } from "react";
import { Button, Image, Item, Segment } from "semantic-ui-react";
import { ITodo } from "../../../app/models/todo";

interface IProps {
  toDos: ITodo[];
  deleteTodo: (e: SyntheticEvent<HTMLButtonElement>, id: string) => void;
  completeTodo: (e: SyntheticEvent<HTMLButtonElement>, toDo: ITodo) => void;
  target: string;
  submitting: boolean;
}

const TodoList: React.FC<IProps> = ({
  toDos,
  deleteTodo,
  completeTodo,
  submitting,
  target,
}) => {
  const handleComplete = (
    event: SyntheticEvent<HTMLButtonElement>,
    id: string
  ) => {
    let toDoz = { ...toDos.filter((a) => a.id === id)[0], status: "Completed" };
    completeTodo(event, toDoz);
    console.log(toDoz);
  };

  const handleIsCompleteStyle = (status: string) => {
    let className = "";
    if (status === "Completed") {
      className = "crossed-line";
    }

    return className;
  };

  return (
    <Segment clearing>
      <Item.Group divided>
        {toDos.map((toDo) => (
          <Item key={toDo.id}>
            <Item.Content>
              <img
                src="/assets/checkmark.png"
                alt="logo"
                style={{
                  inlineSize: "20px",
                  marginRight: "5px",
                  visibility:
                    toDo.status === "Completed" ? "visible" : "hidden",
                }}
              />
              <Item.Header className={handleIsCompleteStyle(toDo.status)}>
                {toDo.taskName}
              </Item.Header>
              <Item.Extra>
                <div
                  style={{
                    visibility:
                      toDo.status === "Completed" ? "hidden" : "visible",
                  }}
                >
                  <Button
                    onClick={(e) => deleteTodo(e, toDo.id)}
                    size="mini"
                    floated="right"
                    content="Delete"
                    color="red"
                    name={toDo.id + "delete"}
                    loading={target === toDo.id + "delete" && submitting}
                  />

                  <Button
                    onClick={(e) => handleComplete(e, toDo.id)}
                    size="mini"
                    floated="right"
                    content="Complete"
                    color="blue"
                    name={toDo.id + "complete"}
                    loading={target === toDo.id + "complete" && submitting}
                  />
                </div>
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  );
};

export default TodoList;
