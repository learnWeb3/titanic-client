import { Paper, Typography } from "@mui/material";
import { forwardRef, useState } from "react";
import { useEffect } from "react";

export const HeaderPanel = forwardRef(
  ({ id = "", title = "Title", variant = "h5", paperVariant = null }, ref) => {
    const paperVariants = {
      danger: {
        backgroundColor: "error.main",
        color: "white",
      },
      success: {
        backgroundColor: "success.main",
        color: "white",
      },
    };

    const [styles, setStyles] = useState({});

    useEffect(() => {
      if (paperVariant) {
        setStyles(paperVariants[paperVariant]);
      }
    }, [paperVariant]);

    return (
      <Paper
        elevation={3}
        sx={{
          padding: "1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          ...styles,
        }}
      >
        <div ref={ref} id={id}>
          <Typography variant={variant} component="h5">
            {title}
          </Typography>
        </div>
      </Paper>
    );
  }
);
