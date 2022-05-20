import { Grid } from "@mui/material";
import { Menu } from "../../components/Menu";

export const PageLayout = ({ component: Component, ...otherProps }) => {
  return (
    <Grid container>
      <Grid
        item
        xs={2}
        lg={3}
        sx={{
          height: "100vh",
          position: "sticky",
          top: 0,
        }}
      >
        <Menu />
      </Grid>
      <Grid
        item
        xs={10}
        lg={9}
        p={4}
        sx={{
          backgroundColor: "#e8eaf6",
        }}
      >
        <Component {...otherProps} />
      </Grid>
    </Grid>
  );
};
