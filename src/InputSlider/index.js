import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export default function InputSlider({ value = 18, label = "", setValue }) {
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
        <RemoveIcon />
        <Slider aria-label={label} value={value} onChange={handleChange} />
        <AddIcon />
      </Stack>
    </Box>
  );
}
