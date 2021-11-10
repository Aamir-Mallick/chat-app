import "./App.css";
import { LoginSignUp } from "./components";
import { ChatRoom } from "./components";
import { createTheme, ThemeProvider } from "@material-ui/core";
import { useState } from "react";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "./firebase";
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
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<object | null>({});

  onAuthStateChanged(auth, (currentuser) => {
    setIsUserLoggedIn(currentuser);
  });

  console.log(isUserLoggedIn);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {/* {isUserLoggedIn ? <ChatRoom /> : <LoginSignUp />} */}
        <ChatRoom />
      </div>
    </ThemeProvider>
  );
}

export default App;
