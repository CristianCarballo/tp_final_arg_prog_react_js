import { Routes, Route } from "react-router-dom";
import { TodoCard } from "../modules/TodoCard";

export const Content = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<TodoCard />} />
      </Routes>
    </>
  );
};
