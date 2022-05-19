import { Grid, Paper, Typography, InputLabel } from "@mui/material";
import { AgingPerson } from "../AgingPerson/index";
import { HeaderPanel } from "../HeaderPanel/index";
import { RadioGroup } from "../RadioGroup";
import { InputWithValidation } from "../InputWithValidation/index";
import InputSlider from "../../InputSlider/index";
import { useState } from "react";

export const Home = ({}) => {
  const [age, setAge] = useState(18);
  const handleChangeSex = (value) => {
    setSexCheckedOption(value);
  };
  const handleChangeClass = (value) => {
    setClassesCheckedOption(+value);
  };

  const [sexCheckedOption, setSexCheckedOption] = useState("male");
  const [classesCheckedOption, setClassesCheckedOption] = useState(1);

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} lg={12}>
        <HeaderPanel
          title={"As a Titanic passenger, Would you have survived ?"}
          variant={"h3"}
        />
      </Grid>
      <Grid item xs={12} lg={4}>
        <Paper
          elevation={3}
          sx={{
            height: "100%",
            padding: "1.5rem",
          }}
        >
          <Typography
            sx={{
              marginBottom: "2rem",
            }}
            variant="h5"
          >
            Choose Passenger characteristics
          </Typography>

          <RadioGroup
            label={"Sex"}
            fields={[
              {
                label: "female",
                value: "female",
              },
              {
                label: "male",
                value: "male",
              },
            ]}
            checked={sexCheckedOption}
            setValue={handleChangeSex}
          />
          <RadioGroup
            label={"Classes"}
            checked={classesCheckedOption}
            fields={[
              {
                label: "1",
                value: 1,
              },
              {
                label: "2",
                value: 2,
              },
              {
                label: "3",
                value: 3,
              },
            ]}
            setValue={handleChangeClass}
          />
          <InputLabel
            sx={{
              marginBottom: "1rem",
            }}
          >
            Age
          </InputLabel>
          <InputWithValidation label={"Age"} value={age} setValue={setAge} />
          <InputSlider label={"Age"} value={age} setValue={setAge} />
        </Paper>
      </Grid>
      <Grid item xs={12} lg={8}>
        <Paper
          elevation={3}
          sx={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "1.5rem",
          }}
        >
          <AgingPerson age={age} sex={sexCheckedOption} />
        </Paper>
      </Grid>
    </Grid>
  );
};
