import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { Container } from "semantic-ui-react";
import { NavBar } from "../../features/nav/NavBar";
import { TodoDashboard } from "../../features/todos/dashboard/TodoDashboard";
import { ITodo } from "../models/todo";

const App = () => {
  const [todos, setTodo] = useState<ITodo[]>([]);

  const handleCreateTodo = (todo: ITodo) => {
    setTodo([...todos, todo]);
  };

  useEffect(() => {
    axios.get<ITodo[]>("http://localhost:5000/api/todos").then((response) => {
      setTodo(response.data);
    });
  }, []);

  return (
    <Fragment>
      <NavBar />
      <Container style={{ marginTop: "7em" }}>
        <TodoDashboard todos={todos} createTodo={handleCreateTodo} />
      </Container>
    </Fragment>
  );
};
export default App;
