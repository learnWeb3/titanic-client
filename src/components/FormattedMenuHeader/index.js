import { MenuItem, ListItemText, Typography } from "@mui/material";

export const FormattedMenuHeader = ({
  label,
  labelVariant,
  labelComponent,
}) => {
  return (
    <MenuItem
      sx={{
        padding: "2rem",
        "&.MuiButtonBase-root:hover": {
          backgroundColor: "transparent",
          cursor: "default",
        },
        color: "white",
      }}
    >
      <ListItemText disableTypography={true}>
        <Typography variant={labelVariant} component={labelComponent}>
          {label}
        </Typography>
      </ListItemText>
    </MenuItem>
  );
};
