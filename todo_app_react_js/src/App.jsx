import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Content } from "./views/layout/Content";
import { NavBar } from "./views/layout/NavBar";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const App = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid xs={12}>
            <Item>
              <NavBar />
            </Item>
          </Grid>
          <Grid xs={12}>
            <Item>
              <Content />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
