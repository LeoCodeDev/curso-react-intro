import React from "react";
import { AppUI } from "../interfaces/AppUI";
import { TodoProvider } from "../context/TodoContext/TodoContext";

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export { App };
