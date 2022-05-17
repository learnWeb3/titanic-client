import { Grid } from "@mui/material";

export const NoMenuLayout = ({
  leftSide: LeftSide = null,
  rightSide: RightSide = null,
}) => {
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        lg={9}
        sx={{
          height: "100vh",
          display: {
            xs: "flex",
          },
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {LeftSide && <LeftSide />}
      </Grid>
      <Grid
        item
        lg={3}
        sx={{
          backgroundColor: 'primary.main',
          display: {
            xs: "none",
            lg: "flex",
          },
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {RightSide && <RightSide />}
      </Grid>
    </Grid>
  );
};
