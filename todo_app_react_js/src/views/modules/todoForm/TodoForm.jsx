import { useState } from "react";
import Input from "@mui/material/Input";
import FormControl from "@mui/material/FormControl";
import { Button } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export const TodoForm = ({ tasks, setTasks }) => {
  const [task, setTask] = useState({
    id: 0,
    title: "",
    description: "",
    isCompleted: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks([...tasks, { ...task }]);
    setTask({ title: "", description: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl margin="normal" fullWidth>
        <Input
          required
          type="text"
          name="title"
          placeholder="Título"
          value={task.title}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl margin="normal" fullWidth>
        <Input
          required
          type="text"
          name="description"
          placeholder="Descripción"
          value={task.description}
          onChange={handleChange}
        />
      </FormControl>
      <Button
        type="submit"
        size="small"
        variant="outlined"
        startIcon={<AddCircleOutlineIcon />}
      >
        Agregar tarea
      </Button>
    </form>
  );
};
