import * as React from "react";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WcIcon from "@mui/icons-material/Wc";
import { FormattedMenuItem } from "../FormattedMenuItem";
import { FormattedMenuHeader } from "../FormattedMenuHeader";

export const Menu = () => {
  return (
    <Paper
      sx={{ width: "100%", height: "100%", backgroundColor: "primary.main" }}
    >
      <MenuList>
        <FormattedMenuHeader
          label={"Menu"}
          labelVariant={"h4"}
          labelComponent={"h2"}
        />
        <FormattedMenuItem
          label={"Passengers age"}
          icon={CalendarMonthIcon}
          navigatePath={"/age"}
          labelVariant={"h6"}
          labelComponent={"p"}
        />
        <FormattedMenuItem
          label={"Passengers classes"}
          icon={LocationOnIcon}
          navigatePath={"/classes"}
          labelVariant={"h6"}
          labelComponent={"p"}
        />
        <FormattedMenuItem
          label={"Passengers sex"}
          icon={WcIcon}
          navigatePath={"/sex"}
          labelVariant={"h6"}
          labelComponent={"p"}
        />
      </MenuList>
    </Paper>
  );
};
