import React, { useState, useEffect } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  TextField,
  Button,
} from "@material-ui/core";
import { useStyles } from "./LoginSignUpstyles";
import "./login-signup-styles.css";
import onlinemessaging from "../../images/online-messaging.svg";
import * as regexAll from "../../Regx/RegxFile";
// import {MessageIcons } from "@material-ui/icons"

export const LoginSignUp = () => {
  const classes = useStyles();

  const [isValidCredentails, setIsValidCredentails] = useState(false);
  const [isValidCredentailsSignUp, setIsValidCredentailsSignUp] =
    useState(false);
  const [isName, setIsName] = useState("");
  const [isEmailLogin, setIsEmail] = useState("");
  const [isPasswordLogin, setIsPassword] = useState("");
  const [isEmailSignUp, setIsEmailSignUp] = useState("");
  const [isPasswordSignup, setIsPasswordSignUp] = useState("");
  const [isLogin, setIsLogin] = useState({
    logInEmail: "",
    LogInPassword: "",
  });

  const [isSignUp, setIsSignUp] = useState({
    name: "",
    signUpEmail: "",
    signUpPassword: "",
  });

  useEffect(() => {
    if (isEmailLogin.length > 0 || isPasswordLogin.length > 0) {
      if (
        regexAll.regexEmail.test(isEmailLogin) &&
        regexAll.regexPassword.test(isPasswordLogin)
      ) {
        setIsValidCredentails(false);
      } else {
        setIsValidCredentails(true);
      }
    } else {
      setIsValidCredentails(false);
    }
  }, [isEmailLogin, isPasswordLogin]);
  console.log(isValidCredentailsSignUp);
  useEffect(() => {
    if (isEmailSignUp.length > 0 || isPasswordSignup.length > 0) {
      if (
        regexAll.regexEmail.test(isEmailSignUp) &&
        regexAll.regexPassword.test(isPasswordSignup)
      ) {
        setIsValidCredentailsSignUp(false);
      } else {
        setIsValidCredentailsSignUp(true);
      }
    } else {
      setIsValidCredentailsSignUp(false);
    }
  }, [isEmailSignUp, isPasswordSignup]);

  const handleChangeLogin = (e: { target: { value: any; name: any } }) => {
    if (e.target.name === "logInEmail") {
      if (!regexAll.regexEmail.test(e.target.value)) {
        setIsLogin({
          ...isLogin,
          [e.target.name]: e.target.value,
        });
        setIsEmail(e.target.value);
      } else {
        setIsLogin({
          ...isLogin,
          [e.target.name]: "",
        });
        setIsEmail(e.target.value);
      }
    } else if (e.target.name === "LogInPassword") {
      if (!regexAll.regexPassword.test(e.target.value)) {
        setIsLogin({
          ...isLogin,
          [e.target.name]: e.target.value,
        });
        setIsPassword(e.target.value);
      } else {
        setIsLogin({
          ...isLogin,
          [e.target.name]: "",
        });
        setIsPassword(e.target.value);
      }
    }
  };

  const handleChangeSignUp = (e: { target: { value: any; name: any } }) => {
    if (e.target.name === "name") {
      if (e.target.value > 2) {
        setIsSignUp({
          ...isSignUp,
          [e.target.name]: e.target.value,
        });
        setIsName(e.target.value);
      } else {
        setIsSignUp({
          ...isSignUp,
          [e.target.name]: "",
        });
        setIsName(e.target.value);
      }
    } else if (e.target.name === "signUpEmail") {
      if (!regexAll.regexEmail.test(e.target.value)) {
        setIsSignUp({
          ...isSignUp,
          [e.target.name]: e.target.value,
        });
        setIsEmailSignUp(e.target.value);
      } else {
        setIsSignUp({
          ...isSignUp,
          [e.target.name]: "",
        });
        setIsEmailSignUp(e.target.value);
      }
    } else if (e.target.name === "signUpPassword") {
      if (!regexAll.regexPassword.test(e.target.value)) {
        setIsSignUp({
          ...isSignUp,
          [e.target.name]: e.target.value,
        });
        setIsPasswordSignUp(e.target.value);
      } else {
        setIsSignUp({
          ...isSignUp,
          [e.target.name]: "",
        });
        setIsPasswordSignUp(e.target.value);
      }
    }
  };

  return (
    <>
      <div className={classes.textFieldContainer}>
        <div>
          <Typography color="secondary" variant="h4">
            Medico
          </Typography>
        </div>
        <div className={classes.mainContainer}>
          <div className={classes.inputFieldContainer}>
            <input
              onChange={handleChangeLogin}
              className="inputField"
              type="text"
              placeholder="Email"
              value={isEmailLogin}
              name="logInEmail"
            />
            {isLogin.logInEmail ? (
              <span className={classes.errorMessage}>
                Must have valid Email.
              </span>
            ) : null}
          </div>
          <div className={classes.inputFieldContainer}>
            <input
              onChange={handleChangeLogin}
              className="passwordField"
              type="password"
              placeholder="Password"
              value={isPasswordLogin}
              name="LogInPassword"
            />
            {isLogin.LogInPassword ? (
              <span className={classes.errorMessage}>
                password should contain one number, one special character, Not
                more then 16 characters
              </span>
            ) : null}
          </div>
          <div className={classes.inputFieldContainerButton}>
            <Button
              disabled={isValidCredentails}
              fullWidth
              variant="contained"
              color="secondary"
              style={{ fontWeight: "bold", height: "100%" }}
            >
              Log in
            </Button>
          </div>
        </div>
      </div>
      <div className={classes.mainContainerSignup}>
        <div className={classes.contentContainer}>
          <img
            style={{
              display: "block",
              margin: "2rem auto",
            }}
            width="310px"
            height="400px"
            src={onlinemessaging}
            alt="mySvgImage"
          />
        </div>
        <div className={classes.signUpcontainer}>
          <div
            style={{
              margin: "3rem auto",
              width: "320px",
            }}
          >
            <Typography
              style={{ marginTop: "2rem" }}
              align="center"
              color="secondary"
              variant="h4"
            >
              Sign Up
            </Typography>
            <div className={classes.inputFieldContainerSigup}>
              <input
                onChange={handleChangeSignUp}
                className="inputField"
                type="text"
                placeholder="Name"
                value={isName}
                name="name"
              />
              {isSignUp.name ? (
                <span className={classes.errorMessage}>
                  Must have valid Name
                </span>
              ) : null}
            </div>
            <div className={classes.inputFieldContainerSigup}>
              <input
                onChange={handleChangeSignUp}
                value={isEmailSignUp}
                name="signUpEmail"
                className="inputField"
                type="text"
                placeholder="Email"
              />
              {isSignUp.signUpEmail ? (
                <span className={classes.errorMessage}>
                  Must have valid Email.
                </span>
              ) : null}
            </div>
            <div className={classes.inputFieldContainerSigup}>
              <input
                onChange={handleChangeSignUp}
                className="passwordField"
                type="password"
                placeholder="Password"
                value={isPasswordSignup}
                name="signUpPassword"
              />
              {isSignUp.signUpPassword ? (
                <span className={classes.errorMessage}>
                  password should contain one number, one special character, Not
                  more then 16 characters
                </span>
              ) : null}
            </div>
            <div className={classes.inputFieldContainerButtonSignUp}>
              <Button
                fullWidth
                variant="contained"
                disabled={isValidCredentailsSignUp}
                color="secondary"
                style={{ fontWeight: "bold" }}
              >
                sign Up
              </Button>
            </div>
            <div className={classes.inputFieldContainerButtonSignUp}>
              <Button
                fullWidth
                variant="contained"
                color="secondary"
                style={{ fontWeight: "bold" }}
              >
                Log in with google
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
