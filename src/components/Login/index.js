import { Grid, Typography, Button, Link } from "@mui/material";
import { InputWithValidation } from "../InputWithValidation";
import { useEffect, useState } from "react";
import { validateEmail } from "../../validators";
import { validatePassword } from "../../validators/index";
import { useNavigate } from "react-router-dom";
import { Alert } from "../Alert";
import { useAlert } from "../../hooks/index";
import { login } from "../../services/http/requests";
import { setUser } from "../../stores/user";
import { useDispatch, useSelector } from "react-redux";

export const Login = ({}) => {
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
  const [formIsValid, setFormIsValid] = useState(false);
  const [validations, setValidations] = useState({
    email: {
      valid: false,
      message: "",
    },
    password: {
      valid: false,
      message: "",
    },
  });

  const currentUser = useSelector((state) => state.user.user);

  useEffect(() => {
    currentUser && navigate("/", { replace: true });
  }, [currentUser]);

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

  const navigate = useNavigate();
  const handleClick = (event) => {
    event.preventDefault();
    const {
      dataset: { path },
    } = event.target;
    navigate(path, { replace: true });
  };

  const dispatch = useDispatch();
  const handleSignin = async (event) => {
    event.preventDefault();
    try {
      const { data, status } = await login({
        email,
        password,
      });
      dispatch(setUser(data.token));
    } catch (error) {
      severity = "error";
      message = {
        title: "Error",
        content: "Login error, please double check your input",
      };
      let message, severity;
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
            onClick={handleSignin}
          >
            LOGIN
          </Button>
        </Grid>

        <Grid item xs={12}>
          <Link
            onClick={handleClick}
            data-path="/signup"
            href="/signup"
            color="inherit"
          >
            Not registred yet ? Sign up.
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
