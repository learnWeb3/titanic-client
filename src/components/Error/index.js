import image404 from "./assets/img/404.png";
import image401 from "./assets/img/401.png";
import { Typography } from "@mui/material";
import React from "react";

export const Error = ({ code = 404, message = "Page not Found" }) => {
  const imageMapping = {
    404: image404,
    401: image401,
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={imageMapping[code]}
          style={{
            height: "25rem",
          }}
        />
        <Typography variant="h5" component="h2">
          {message}
        </Typography>
      </div>
    </div>
  );
};
