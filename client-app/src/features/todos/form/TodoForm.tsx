import React, { FormEvent, SyntheticEvent, useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { ITodo } from "../../../app/models/todo";
import { v4 as uuid } from "uuid";

interface IProps {
  createTodo: (buttonName: string, todo: ITodo) => void;
  submitting: boolean;
  target: string;
}

const TodoForm: React.FC<IProps> = ({ createTodo, submitting, target }) => {
  const initForm = () => {
    return {
      id: "",
      taskName: "",
      dateCreated: "",
      status: "",
    };
  };
  const [todo, setTodo] = useState<ITodo>(initForm);

  const getCurrentDate = () => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    let yyyy = today.getFullYear();

    return mm + "/" + dd + "/" + yyyy;
  };

  const handleSubmit = () => {
    let newTodo = {
      ...todo,
      id: uuid(),
      status: "Created",
      dateCreated: getCurrentDate(),
    };
    createTodo("addItem", newTodo);
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
          name="addItem"
          loading={target === "addItem" && submitting}
        />
      </Form>
    </Segment>
  );
};

export default TodoForm;
