import { Grid, Paper, Typography, InputLabel, Button } from "@mui/material";
import { AgingPerson } from "../AgingPerson/index";
import { HeaderPanel } from "../HeaderPanel/index";
import { RadioGroup } from "../RadioGroup";
import { InputWithValidation } from "../InputWithValidation/index";
import InputSlider from "../../InputSlider/index";
import { useState } from "react";
import { estimateSurvival } from "../../services/http/requests/index";
import { useSelector } from "react-redux";

export const Home = ({}) => {
  const user = useSelector((state) => state.user.user);
  const [survival, setSurvival] = useState(null);
  const [age, setAge] = useState(18);
  const handleChangeSex = (value) => {
    setSexCheckedOption(value);
  };
  const handleChangeClass = (value) => {
    setClassesCheckedOption(+value);
  };

  const handleSurvival = async () => {
    estimateSurvival(
      {
        ageMin: Math.floor(age / 10) * 10,
        ageMax: Math.ceil(age / 10) * 10,
        sex: sexCheckedOption,
        class: classesCheckedOption,
      },
      user
    )
      .then(({ data, status }) => {
        setSurvival(data.survival);
      })
      .catch((error) => console.error(error));
  };

  const [sexCheckedOption, setSexCheckedOption] = useState("male");
  const [classesCheckedOption, setClassesCheckedOption] = useState(1);

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} lg={12}>
        <HeaderPanel
          title={"Titanic passenger sample dataset analysis"}
          variant={"h3"}
        />
      </Grid>
      <Grid item xs={12} lg={12}>
        <HeaderPanel
          title={`Titanic, in full Royal Mail Ship (RMS) Titanic, British luxury passenger liner that sank on April 14–15, 1912, during its maiden voyage, en route to New York City from Southampton, England, killing about 1,500 (see Researcher’s Note: Titanic) passengers and ship personnel. One of the most famous tragedies in modern history, it inspired numerous stories, several films, and a musical and has been the subject of much scholarship and scientific speculation.`}
          variant={"h6"}
        />
      </Grid>
      <Grid item xs={12} lg={12}>
        <HeaderPanel
          title='The exact number of people killed is unknown. Original passenger and crew lists were rendered inaccurate by such factors as misspellings, omissions, aliases, and failure to count musicians and other contracted employees as either passengers or crew members. However, it is generally believed that of the ship’s approximately 2,200 passengers and crew members, some 1,500 people perished when the ship sank. According to the U.S. committee investigating the sinking, 1,517 lives were lost, and its British counterpart determined that 1,503 died. The crew suffered the most casualties, with about 700 fatalities. 
          Third class also suffered greatly, as only 174 of its approximately 710 passengers survived.'
          variant={"h6"}
        />
      </Grid>
      <Grid item xs={12} lg={12}>
        <HeaderPanel
          title={"As a Titanic passenger, would you have survived ?"}
          variant={"h4"}
        />
      </Grid>
      <Grid item xs={12} lg={4}>
        <Paper
          elevation={3}
          sx={{
            padding: "1.5rem",
            minHeight: "50vh",
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
          <Button
            sx={{
              marginTop: "2rem",
            }}
            size="large"
            color="success"
            variant="contained"
            onClick={handleSurvival}
            fullWidth={true}
          >
            LETS FIND OUT
          </Button>
        </Paper>
      </Grid>
      <Grid item xs={12} lg={8}>
        <Paper
          elevation={3}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "1.5rem",
            minHeight: "50vh",
          }}
        >
          <AgingPerson age={age} sex={sexCheckedOption} />
        </Paper>
      </Grid>
      {survival && (
        <Grid item xs={12} lg={12}>
          <HeaderPanel
            paperVariant={survival < 0.5 ? "danger" : "success"}
            title={
              survival < 0.5
                ? "Oh godness !! you would have died on the Titanic"
                : "Lucky You !! you would have survived"
            }
            variant={"h6"}
          />
        </Grid>
      )}
    </Grid>
  );
};
