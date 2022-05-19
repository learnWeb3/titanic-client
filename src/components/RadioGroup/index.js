import {
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup as MuiRadioGroup,
  Radio,
} from "@mui/material";

export const RadioGroup = ({
  setValue,
  label = "Gender",
  checked = "male",
  fields = [
    {
      label: "female",
      value: "female",
      checked: false,
    },
    {
      label: "male",
      value: "male",
      checked: true,
    },
  ],
}) => {
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <FormControl
      sx={{
        marginBottom: "1rem",
        width: "100%",
      }}
    >
      <FormLabel id="demo-row-radio-buttons-group-label">{label}</FormLabel>
      <MuiRadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        {fields &&
          fields.length &&
          fields.map(({ label, value }) => (
            <FormControlLabel
              key={value}
              value={value}
              control={<Radio />}
              checked={value === checked}
              label={label}
              onChange={handleChange}
            />
          ))}
      </MuiRadioGroup>
    </FormControl>
  );
};
