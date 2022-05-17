import { IndicatorPanel } from "../IndicatorPanel/index";
import { PieChart } from "../PieChart/index";
import { Grid } from "@mui/material";
import { ColumnChart } from "../ColumnChart";

export const Home = ({}) => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} lg={4}>
        <IndicatorPanel component={PieChart} />
      </Grid>
      <Grid item xs={12} lg={4}>
        <IndicatorPanel component={PieChart} />
      </Grid>
      <Grid item xs={12} lg={4}>
        <IndicatorPanel component={PieChart} />
      </Grid>
      <Grid item xs={12} lg={6}>
        <IndicatorPanel component={ColumnChart} />
      </Grid>
    </Grid>
  );
};
