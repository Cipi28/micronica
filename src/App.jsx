import {Outlet} from "react-router-dom";
import {AppHeader} from "./components/AppHeader";
import {ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import {ChakraProvider} from '@chakra-ui/react'
import {LanguageProvider} from './configs/LanguageProvider.jsx';

function App() {

    const theme = createTheme({
        palette: {
            primary: {
                main: "#050A30",
            },
            secondary: {
                main: "#ffffff",
            },
            background: {
                default: "#f4f4f9",
            },
        },
    });

    return (
        <ChakraProvider>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <LanguageProvider>
                    <AppHeader/>
                    <Outlet/>
                </LanguageProvider>
            </ThemeProvider>
        </ChakraProvider>
    )
}

export default App
