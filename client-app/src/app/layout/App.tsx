import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { Container } from "semantic-ui-react";
import { NavBar } from "../../features/nav/NavBar";
import { TodoDashboard } from "../../features/todos/dashboard/TodoDashboard";
import { ITodo } from "../models/todo";

const App = () => {
  const [toDos, setTodos] = useState<ITodo[]>([]);
  const [selectedToDo, setSelectedTodo] = useState<ITodo | null>(null);

  const handleCreateTodo = (todo: ITodo) => {
    setTodos([...toDos, todo]);
  };

  const handleDeleteTodo = (id: string) => {
    setTodos([...toDos.filter((a) => a.id !== id)]);
  };

  const handleCompleteTodo = (toDo: ITodo) => {
    setTodos([...toDos.filter(a => a.id !== toDo.id), toDo])
  };

  useEffect(() => {
    axios.get<ITodo[]>("http://localhost:5000/api/todos").then((response) => {
      setTodos(response.data);
    });
  }, []);

  return (
    <Fragment>
      <NavBar />
      <Container style={{ marginTop: "7em" }}>
        <TodoDashboard
          toDos={toDos}
          deleteTodo={handleDeleteTodo}
          createTodo={handleCreateTodo}
          completeTodo={handleCompleteTodo}
        />
      </Container>
    </Fragment>
  );
};
export default App;
