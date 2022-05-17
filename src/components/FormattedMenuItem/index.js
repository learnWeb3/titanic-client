import { ListItemIcon, MenuItem, ListItemText, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const FormattedMenuItem = ({
  icon: Icon,
  label,
  labelVariant,
  labelComponent,
  navigatePath,
}) => {
  const navigate = useNavigate();
  return (
    <MenuItem
      sx={{
        padding: "2rem",
        display: "flex",
        justifyContent: {
          xs: "center",
          lg: "start",
        },
        alignItems: "center",
        color: "white",
      }}
      onClick={() => navigate(navigatePath)}
    >
      <ListItemIcon
        sx={{
          color: "inherit",
        }}
      >
        <Icon fontSize="medium" />
      </ListItemIcon>
      <ListItemText disableTypography={true} sx={{
        display:{
          xs: 'none', lg: 'flex'
        }
      }}>
        <Typography variant={labelVariant} component={labelComponent}>
          {label}
        </Typography>
      </ListItemText>
    </MenuItem>
  );
};
