import TodoList from "../components/TodoList";
import Textfield from "@atlaskit/textfield";
import Button from "@atlaskit/button";
import { useState, useCallback, useEffect } from "react";
import { v4 } from "uuid";
import './App.css'

const TODO_APP_STORAGE_KEY = "TODO_APP";

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [textInput, setTextInput] = useState("");

  useEffect(() => {
    const storagedTodoList = JSON.parse(localStorage.getItem(TODO_APP_STORAGE_KEY));
    if (storagedTodoList) {
      setTodoList(storagedTodoList);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(TODO_APP_STORAGE_KEY, JSON.stringify(todoList));
  }, [todoList]);

  const onTextInputChange = useCallback((e) => {
    setTextInput(e.target.value);
  }, []);

  const onAddBtnClick = useCallback(() => {
    // Add text input to todoList
    setTodoList([{ id: v4(), name: textInput, isCompleted: false }, ...todoList]);
    setTextInput("");
  }, [textInput, todoList]);

  const onCheckBtnClick = useCallback((id) => {
    setTodoList((prevState) => prevState.map((todo) => (todo.id === id ? { ...todo, isCompleted: true } : todo)));
  }, []);

  return (
    <>
      <h3>Todo List</h3>
      <Textfield
        name="add-todo"
        placeholder="Add job..."
        elemAfterInput={
          <Button isDisabled={!textInput} appearance="primary" onClick={onAddBtnClick}>
            Add
          </Button>
        }
        css={{ padding: "2px 4px 2px" }}
        value={textInput}
        onChange={onTextInputChange}
      ></Textfield>
      <TodoList todoList={todoList} onCheckBtnClick={onCheckBtnClick} />
    </>
  );
};

export default App;
