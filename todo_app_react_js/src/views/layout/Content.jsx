import { Routes, Route } from "react-router-dom";
import { TodoList } from "../modules/todoList/TodoList";
import { TodoForm } from "../modules/todoForm/TodoForm";
import { PageNotFound } from "../layout/PageNotFound";

export const Content = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<PageNotFound />} />
        <Route path="/" element={<TodoList />} />
        <Route path="/list" element={<TodoList />} />
        <Route path="/form" element={<TodoForm />} />
      </Routes>
    </>
  );
};
