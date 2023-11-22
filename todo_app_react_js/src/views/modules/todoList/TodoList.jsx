import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export const TodoList = ({ tasks, setTasks }) => {
  const handleToggleTaskCompletion = (taskId) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, isCompleted: !task.isCompleted };
        }
        return task;
      })
    );
  };

  const handleRemoveTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <Accordion key={task.id}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Checkbox
                checked={task.isCompleted}
                onChange={() => handleToggleTaskCompletion(task.id)}
              />
              <Typography
                style={
                  task.isCompleted ? { textDecoration: "line-through" } : {}
                }
              >
                {task.title}
              </Typography>
              {task.isCompleted && (
                <CheckCircleOutlineIcon
                  sx={{ color: "green", paddingLeft: 1 }}
                />
              )}
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ paddingBottom: 3 }}>
                {task.description}
              </Typography>
              <Button
                size="small"
                variant="outlined"
                startIcon={<DeleteIcon />}
                onClick={() => handleRemoveTask(task.id)}
              >
                Delete
              </Button>
            </AccordionDetails>
          </Accordion>
        ))
      ) : (
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Sin tareas</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Nada por aquí..</Typography>
          </AccordionDetails>
        </Accordion>
      )}
    </>
  );
};
