import React, { FormEvent, useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { ITodo } from "../../../app/models/todo";
import { v4 as uuid } from "uuid";

interface IProps {
  createTodo: (todo: ITodo) => void;
}

const TodoForm: React.FC<IProps> = ({ createTodo }) => {
  const initForm = () => {
    return {
      id: "",
      taskName: "",
      dateCreated: "",
      status: "",
    };
  };
  const [todo, setTodo] = useState<ITodo>(initForm);

  const handleSubmit = () => {
    let newTodo = {
      ...todo,
      id: uuid(),
    };
    createTodo(newTodo);
  };

  const handleInputChange = (
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.currentTarget;
    setTodo({ ...todo, [name]: value });
  };

  return (
    <Segment clearing>
      <Form onSubmit={handleSubmit}>
        <Form.Input
          onChange={handleInputChange}
          name="taskName"
          placeholder="Type your todo here..."
        />
        <Button
          size="mini"
          floated="right"
          positive
          type="submit"
          content="Add Item"
        />
      </Form>
    </Segment>
  );
};

export default TodoForm;
