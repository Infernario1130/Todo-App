import React, {useState,useEffect} from "react";
import { TodoCreator } from "./TodoCreator";
import { TodoRenderer } from "./TodoRenderer";

function App() {
  const [todos,setTodos] = useState([])
  
  useEffect(function () {
    fetch("http://localhost:3000/todo")
      .then(function (value) {
        return value.json();
      })
      .then(function (res) {
        console.log("Response from backend:", res);
        setTodos(res.Todo);  
      })
      .catch(function (error) {
        console.error("Fetch failed:", error);
      });
  }, [todos]);
  

  return (
    <>
    <TodoCreator></TodoCreator>
    <TodoRenderer todos={todos} ></TodoRenderer>
    </>
  )
}

export default App;