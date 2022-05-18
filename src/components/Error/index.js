import image404 from "./assets/img/404.png";
import image401 from "./assets/img/401.png";
import { Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export const Error = ({ code = 404, message = "Page not Found" }) => {
  const navigate = useNavigate();
  const imageMapping = {
    404: image404,
    401: image401,
  };

  const redirectionMapping = {
    404: {
      action: () => navigate("/", { replace: true }),
      label: "Home",
    },
    401: {
      action: () => navigate("/login", { replace: true }),
      label: "Login",
    },
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

        <Button sx={{
          marginTop: "2rem"
        }} size="large"
            color="success"
            variant="contained" onClick={redirectionMapping[code].action}>
          {redirectionMapping[code].label}
        </Button>
      </div>
    </div>
  );
};
