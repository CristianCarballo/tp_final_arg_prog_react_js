import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { TodoList } from "./modules/todoList/TodoList";
import { TodoForm } from "./modules/todoForm/TodoForm";
import { tasksList } from "./data";
import { useState } from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const App = () => {
  const [tasks, setTasks] = useState(tasksList);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Trabajo Integrador Arg. Prog.</h1>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Item>
              <TodoList tasks={tasks} setTasks={setTasks} />
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <TodoForm tasks={tasks} setTasks={setTasks} />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
