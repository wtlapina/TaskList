import axios from "axios";
import React, { Fragment, SyntheticEvent, useEffect, useState } from "react";
import { Container } from "semantic-ui-react";
import { getAllJSDocTagsOfKind } from "typescript";
import { NavBar } from "../../features/nav/NavBar";
import { TodoDashboard } from "../../features/todos/dashboard/TodoDashboard";
import agent from "../api/agent";
import { ITodo } from "../models/todo";
import LoadingComponent from "./LoadingComponent";

const App = () => {
  const [toDos, setTodos] = useState<ITodo[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [target, setTarget] = useState("");
  //const [selectedToDo, setSelectedTodo] = useState<ITodo | null>(null);

  const handleCreateTodo = (buttonName: string, todo: ITodo) => {
    setSubmitting(true);
    setTarget(buttonName);
    agent.ToDos.create(todo)
      .then(() => {
        setTodos([...toDos, todo]);
      })
      .then(() => setSubmitting(false));
  };

  const handleDeleteTodo = (
    event: SyntheticEvent<HTMLButtonElement>,
    id: string
  ) => {
    setSubmitting(true);
    setTarget(event.currentTarget.name);
    agent.ToDos.delete(id)
      .then(() => {
        setTodos([...toDos.filter((a) => a.id !== id)]);
      })
      .then(() => setSubmitting(false));
  };

  const handleCompleteTodo = (
    event: SyntheticEvent<HTMLButtonElement>,
    toDo: ITodo
  ) => {
    setSubmitting(true);
    setTarget(event.currentTarget.name);
    agent.ToDos.complete(toDo).then(() => {
      setTodos([...toDos.filter((a) => a.id !== toDo.id), toDo]);
    }).then(() => setSubmitting(false));
  };

  useEffect(() => {
    agent.ToDos.list()
      .then((response) => {
        setTodos(response);
      })
      .then(() => setLoading(false));
  }, []);

  if (loading) return <LoadingComponent content="Loading To Dos..." />;

  return (
    <Fragment>
      <NavBar />
      <Container style={{ marginTop: "7em" }}>
        <TodoDashboard
          toDos={toDos}
          deleteTodo={handleDeleteTodo}
          createTodo={handleCreateTodo}
          completeTodo={handleCompleteTodo}
          submitting={submitting}
          target={target}
        />
      </Container>
    </Fragment>
  );
};
export default App;
