import { TextField } from "@mui/material";

export const InputWithValidation = ({
  id,
  label,
  value,
  defaultValue,
  helperText,
  setValue,
  type = "text",
  error = false,
  sx = {},
}) => {
  const handleChange = (event) => {
    const value = event.target.value;
    setValue(value);
  };
  return (
    <TextField
      sx={{
        width: "100%",
        marginBottom: "1rem",
        ...sx,
      }}
      error={error}
      value={value}
      type={type}
      id={id}
      label={label}
      defaultValue={defaultValue}
      helperText={helperText}
      onChange={handleChange}
      variant="outlined"
    />
  );
};
