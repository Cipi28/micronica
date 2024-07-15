import { Outlet } from "react-router-dom";
import { AppHeader } from "./components/AppHeader";
import { ThemeProvider, createTheme } from "@mui/material";

import './App.css'

function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: "#d1cd00",
      },
      secondary: {
        main: "#ffffff",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <AppHeader />
      <Outlet />
    </ThemeProvider>
  )
}

export default App
