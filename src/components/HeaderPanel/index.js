import { Paper, Typography } from "@mui/material";

export const HeaderPanel = ({ title = "Title", variant = "h5" }) => {
  return (
    <Paper
      elevation={3}
      sx={{
        padding: "1.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant={variant} component="h5">
        {title}
      </Typography>
    </Paper>
  );
};
