import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  textFieldContainer: {
    backgroundColor: "#041733",
    display: "flex",
    justifyContent: "space-between",
    padding: "1.5rem",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  mainContainer: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  inputFieldContainer: {
    marginRight: "1rem",
    position: "relative",
    width: "250px",
    boxSizing: "border-box",
    [theme.breakpoints.down("sm")]: {
      marginTop: "1rem",
      width: "320px",
    },
  },
  inputFieldContainerSigup: {
    marginTop: "1rem",
    width: "400px",
    boxSizing: "border-box",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      marginTop: "1rem",
      width: "320px",
    },
  },
  inputFieldContainerButton: {
    [theme.breakpoints.down("sm")]: {
      marginTop: "1rem",
      width: "320px",
    },
  },
  inputFieldContainerButtonSignUp: {
    marginTop: "1rem",
    width: "400px",
    [theme.breakpoints.down("sm")]: {
      width: "320px",
    },
  },
  mainContainerSignup: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  contentContainer: {
    flexBasis: "50%",
    [theme.breakpoints.down("sm")]: {
      flexBasis: "100%",
    },
  },
  typographyContent: {
    margin: "4rem auto",
    width: "500px",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      width: "320px",
    },
  },
  signUpcontainer: {
    flexBasis: "50%",
    border: "1px solid black",
    backgroundColor: "#041733",
    [theme.breakpoints.down("sm")]: {
      flexBasis: "100%",
    },
  },
  errorMessage: {
    fontSize: "10px",
    position: "absolute",
    top: "50px",
    left: "0px",
    padding: "2px 4px",
    color: "red",
  },
}));
