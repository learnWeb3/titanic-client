import { Grid, Typography, Button } from "@mui/material";
import { InputWithValidation } from "../InputWithValidation";
import { useEffect, useState } from "react";
import { validateEmail } from "../../validators";
import { validatePassword } from "../../validators/index";

export const Login = ({}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formIsValid, setFormIsValid] = useState(false);
  const [validations, setValidations] = useState({
    email: {
      valid: true,
      message: "",
    },
    password: {
      valid: true,
      message: "",
    },
  });

  useEffect(() => {
    const { errors, valid } = validateEmail(email);
    setValidations({
      ...validations,
      email: {
        ...validations.email,
        valid: valid,
        message: errors.join(","),
      },
    });
  }, [email]);

  useEffect(() => {
    const { errors, valid } = validatePassword(password);
    setValidations({
      ...validations,
      password: {
        ...validations.password,
        valid: valid,
        message: errors.join(","),
      },
    });
  }, [password]);

  useEffect(() => {
    if (validations.email.valid && validations.password.valid) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [validations]);

  return (
    <Grid
      container
      p={4}
      sx={{
        marginBottom: "6rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid item xs={12} lg={6} container>
        <Grid item xs={12} marginBottom={4}>
          <Typography variant="h4" component="h1">
            Sign In
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <InputWithValidation
            label={"Email"}
            setValue={setEmail}
            value={email}
            helperText={
              validations.email.valid ? "required" : validations.email.message
            }
            error={!validations.email.valid}
            type={"email"}
          />
          <InputWithValidation
            label={"password"}
            setValue={setPassword}
            value={password}
            type={"password"}
            helperText={
              validations.password.valid
                ? "required"
                : validations.password.message
            }
            error={!validations.password.valid}
          />
          <Button
            disabled={!formIsValid}
            size="large"
            color="success"
            variant="contained"
          >
            LOGIN
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
