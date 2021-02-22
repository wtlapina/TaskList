import React from "react";
import { Button, Image, Item, Segment } from "semantic-ui-react";
import { ITodo } from "../../../app/models/todo";

interface IProps {
  todos: ITodo[];
}

const TodoList: React.FC<IProps> = ({ todos }) => {
  return (
    <Segment clearing>
      <Item.Group divided>
        {todos.map((todo) => (
          <Item key={todo.id}>
            <Item.Content>
              <Item.Header as="a">{todo.taskName}</Item.Header>
              <Item.Extra>
                <Button size='mini' floated="right" content="Complete" color="blue" />
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  );
};

export default TodoList;
