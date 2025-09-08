import "./App.css";
import { ChatRoom } from "./components";
import { createTheme, ThemeProvider } from "@material-ui/core";
import { useState } from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: "#041733",
    },
    secondary: {
      main: "#64ffda",
    },
    action: {
      disabledBackground: "#b0cad0",
      disabled: "#fff",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <ChatRoom />
      </div>
    </ThemeProvider>
  );
}

export default App;
