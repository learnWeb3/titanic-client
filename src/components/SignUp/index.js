import { Grid, Typography, Button, Link } from "@mui/material";
import { InputWithValidation } from "../InputWithValidation";
import { useEffect, useState } from "react";
import { validateEmail, validateSameValue } from "../../validators";
import { validatePassword } from "../../validators/index";
import { useNavigate } from "react-router-dom";

export const SignUp = ({}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
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
    passwordConfirmation: {
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
    const { errors, valid } = validateSameValue(
      password,
      passwordConfirmation,
      "password",
      "password confirmation"
    );
    setValidations({
      ...validations,
      passwordConfirmation: {
        ...validations.passwordConfirmation,
        valid: valid,
        message: errors.join(","),
      },
    });
  }, [password, passwordConfirmation]);

  useEffect(() => {
    if (
      validations.email.valid &&
      validations.password.valid &&
      validations.passwordConfirmation.valid
    ) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [validations]);

  const navigate = useNavigate();
  const handleClick = (event) => {
    const { href } = event.target;
    navigate(href);
  };

  return (
    <Grid
      container
      p={4}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid item xs={12} lg={6} container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h4" component="h1">
            Sign Up
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <InputWithValidation
            label={"Email"}
            setValue={setEmail}
            value={email}
            helperText={
              validations.email.valid
                ? "Must be a valid email"
                : validations.email.message
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
                ? "Must contains capital letters, lowercased letters, numbers and special characters"
                : validations.password.message
            }
            error={!validations.password.valid}
          />

          <InputWithValidation
            label={"password confirmation"}
            setValue={setPasswordConfirmation}
            value={passwordConfirmation}
            type={"password"}
            helperText={
              validations.password.valid
                ? "Must be the same as password field"
                : validations.passwordConfirmation.message
            }
            error={!validations.passwordConfirmation.valid}
          />
          <Button
            disabled={!formIsValid}
            size="large"
            color="success"
            variant="contained"
          >
            SIGNUP
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Link onClick={handleClick} href="/login" color="inherit">
            Already have an account ? Sign in.
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
};
