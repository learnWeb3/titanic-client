import * as React from "react";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WcIcon from "@mui/icons-material/Wc";
import HomeIcon from "@mui/icons-material/Home";
import { FormattedMenuItem } from "../FormattedMenuItem";
import { FormattedMenuHeader } from "../FormattedMenuHeader";
import { Logout } from "../Logout/index";
import LogoutIcon from "@mui/icons-material/Logout";

export const Menu = () => {
  return (
    <Paper
      sx={{
        width: "100%",
        height: "100%",
        backgroundColor: "primary.main",
        position: "sticky",
        top: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <MenuList>
        <FormattedMenuHeader
          label={"Menu"}
          labelVariant={"h4"}
          labelComponent={"h2"}
        />
        <FormattedMenuItem
          label={"Home"}
          icon={HomeIcon}
          navigatePath={"/"}
          labelVariant={"h6"}
          labelComponent={"p"}
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

      <MenuList>
        <FormattedMenuItem
          label={"Log out"}
          icon={LogoutIcon}
          navigatePath={"/logout"}
          labelVariant={"h6"}
          labelComponent={"p"}
        />
      </MenuList>
    </Paper>
  );
};
