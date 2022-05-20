import * as React from "react";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WcIcon from "@mui/icons-material/Wc";
import HomeIcon from "@mui/icons-material/Home";
import { FormattedMenuItem } from "../FormattedMenuItem";
import { FormattedMenuHeader } from "../FormattedMenuHeader";
import LogoutIcon from "@mui/icons-material/Logout";
import { MenuItem } from "@mui/material";
import { AutocompleField } from "../Autocomplete/inde";
import { searchResults } from "./helpers";
import { useNavigate } from "react-router-dom";

export const Menu = () => {
  const navigate = useNavigate();
  const handleValue = (event) => {
    const {
      target: { textContent },
    } = event;
    const result = searchResults.find(({ label }) => label === textContent);
    if (result) {
      const { label, path, anchor } = result;
      const urlEncoded = encodeURI(anchor);
      navigate(`${path}#${urlEncoded}`, {replace: false});
    }
  };
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
        >
          <AutocompleField
            label={"Search an analysis"}
            options={searchResults}
            setValue={handleValue}
          />
        </MenuItem>
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
