import { Paper, Typography } from "@mui/material";

export const IndicatorPanel = ({ component: Component, title="Title", ...otherProps }) => {
  return (
    <Paper elevation={3} sx={{
        padding:'1.5rem'
    }}>
      <Component {...otherProps} />
      <Typography variant="subtitle1" component="p">
          {title}
      </Typography>
    </Paper>
  );
};
