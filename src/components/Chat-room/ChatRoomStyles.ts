import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  rootContainer: {
    backgroundColor: "#041733",
    padding: "2rem 3rem",
  },
  messageContainer: {
    display: "flex",
    marginTop: "5px",

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  paper: {
    position: "absolute",
    width: 300,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  chatHeader: {
    backgroundColor: "#041733",
    height: "50px",
    color: "#64ffda",
    fontWeight: 900,
    padding: "15px 20px",
  },
  chatBody: {
    backgroundColor: "#d2d1d1",
    height: "300px",
  },
  chatFooter: {
    display: "flex",
    height: "50px",
  },
  roomContainer: {
    backgroundColor: "#041733",
    flex: 1,
    height: "400px",
    marginLeft: "5px",
  },
  chatContainer: {
    backgroundColor: "#fff",
    flex: 3,
    height: "400px",
    marginLeft: "5px",
    marginRight: "5px",
  },
  roomContainerScroll: {
    height: "400px",
  },
}));
