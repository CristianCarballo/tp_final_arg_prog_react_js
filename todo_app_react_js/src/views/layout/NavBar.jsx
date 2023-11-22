import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PhoneIcon from "@mui/icons-material/Phone";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonPinIcon from "@mui/icons-material/PersonPin";
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
        <Tab icon={<PhoneIcon />} label="RECENTS" />
      </Link>

      <Link to="/favorites">
        <Tab icon={<FavoriteIcon />} label="FAVORITES" />
      </Link>

      <Link to="/nearby">
        <Tab icon={<PersonPinIcon />} label="NEARBY" />
      </Link>
    </Tabs>
  );
};
