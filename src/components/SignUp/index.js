import { Grid, Typography, Button, Link } from "@mui/material";
import { InputWithValidation } from "../InputWithValidation";
import { useEffect, useState } from "react";
import { validateEmail, validateSameValue } from "../../validators";
import { validatePassword } from "../../validators/index";
import { useNavigate } from "react-router-dom";
import { register } from "../../services/http/requests";
import { useAlert } from "../../hooks/index";
import { Alert } from "../Alert";

export const SignUp = ({}) => {
  const {
    toggled,
    setToggled,
    alertMessage,
    setAlertMessage,
    alertSeverity,
    setAlertSeverity,
  } = useAlert();
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

  useEffect(()=>{
    const { errors:emailErrors, valid:emailIsValid } = validateEmail(email);
    const { errors:errorsPassword, valid:passwordIsValid } = validatePassword(password);
    const { errors:errorsPasswordConfirmation, valid: passwordConfirmationIsValid } = validateSameValue(
      password,
      passwordConfirmation,
      "password",
      "password confirmation"
    );
    setValidations({
      ...validations,
      email: {
        ...validations.email,
        valid: emailIsValid,
        message: emailErrors.join(","),
      },
      password: {
        ...validations.password,
        valid: passwordIsValid,
        message: errorsPassword.join(","),
      },
      passwordConfirmation: {
        ...validations.passwordConfirmation,
        valid: passwordConfirmationIsValid,
        message: errorsPasswordConfirmation.join(","),
      },
    });
  })

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
    event.preventDefault();
    const {
      dataset: { path },
    } = event.target;
    navigate(path, { replace: true });
  };

  const handleRegister = async () => {
    let message, severity;
    try {
      await register({
        email,
        password,
      });
      severity="success";
      message = {
        title: "Success",
        content: "Account created with success, sign in to access the platform",
      };
    } catch (error) {
      severity="error";
      message = {
        title: "Error",
        content: "Account creation error, please double check your input",
      };
    }finally{
      setAlertSeverity(severity);
      setAlertMessage(message);
      setToggled(true);
    }
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
            onClick={handleRegister}
          >
            SIGNUP
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Link
            onClick={handleClick}
            data-path={"/login"}
            href="/login"
            color="inherit"
          >
            Already have an account ? Sign in.
          </Link>
        </Grid>
        <Grid item xs={12}>
          {toggled ? (
            <Alert
              severity={alertSeverity}
              title={alertMessage.title}
              content={alertMessage.content}
              setToggled={setToggled}
            />
          ) : (
            <p>&nbsp;</p>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};
