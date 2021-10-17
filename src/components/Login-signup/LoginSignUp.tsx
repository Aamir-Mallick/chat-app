import React from "react";
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
// import {MessageIcons } from "@material-ui/icons"

export const LoginSignUp = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.textFieldContainer}>
        <div>
          <Typography color="secondary" variant="h4">
            Hii message
          </Typography>
        </div>
        <div className={classes.mainContainer}>
          <div className={classes.inputFieldContainer}>
            <input className="inputField" type="text" placeholder="Email" />
          </div>
          <div className={classes.inputFieldContainer}>
            <input
              className="passwordField"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className={classes.inputFieldContainerButton}>
            <Button
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
          <Typography
            variant="h4"
            style={{
              margin: "4rem auto",
              width: "500px",
              textAlign: "center",
            }}
          >
            Hello Welcome to social messaging center, here you can talk to your
            friends and also you can join any one from rest of the world
          </Typography>
        </div>
        <div className={classes.signUpcontainer}>
          <div
            style={{
              margin: "3rem auto",
              width: "400px",
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
              <input className="inputField" type="text" placeholder="Name" />
            </div>
            <div className={classes.inputFieldContainerSigup}>
              <input className="inputField" type="text" placeholder="Email" />
            </div>
            <div className={classes.inputFieldContainerSigup}>
              <input
                className="passwordField"
                type="password"
                placeholder="Password"
              />
            </div>
            <div className={classes.inputFieldContainerButtonSignUp}>
              <Button
                fullWidth
                variant="contained"
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
