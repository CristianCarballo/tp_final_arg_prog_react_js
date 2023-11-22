import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import ChecklistRtlIcon from "@mui/icons-material/ChecklistRtl";
import { useState } from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs
      centered
      value={value}
      onChange={handleChange}
      aria-label="icon label tabs example"
    >
      <Link to="/">
        <Tab icon={<ChecklistRtlIcon />} label="LISTA DE TAREAS" />
      </Link>

      <Link to="/form">
        <Tab icon={<PlaylistAddIcon />} label="FORMULARIO" />
      </Link>
    </Tabs>
  );
};
