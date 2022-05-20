import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export const AutocompleField = ({ id, label, options = [], setValue }) => {
  return (
    <Autocomplete
      disablePortal
      id={id}
      options={options}
      sx={{ width: "100%" }}
      renderInput={(params) => (
        <TextField
          sx={{
            "& .MuiInputBase-input": {
              color: "white",
            },
            "& .MuiSvgIcon-root": {
              color: "white",
            },
            "& label.Mui-focused": {
              color: "white",
            },
            "& .MuiInput-underline:after": {
              borderBottomColor: "white",
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "white",
              },
              "&:hover fieldset": {
                borderColor: "white",
              },
              "&.Mui-focused fieldset": {
                borderColor: "white",
              },
            },
          }}
          {...params}
          label={label}
        />
      )}
      onChange={setValue}
    />
  );
};
