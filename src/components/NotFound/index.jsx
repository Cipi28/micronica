import {Box, Typography, Button} from '@mui/material';
import {Link} from 'react-router-dom';
import logo from "../../assets/logo.svg";
import {useLanguage} from "../../configs/LanguageProvider.jsx";

export const NotFound = () => {
    const {isRom, setISRom} = useLanguage();
    return (
        <Box
            sx={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
            }}
        >
            <Box sx={{mb: 3}}>
                <img src={logo} alt="Logo" style={{width: '30rem', height: 'auto'}}/>
            </Box>

            <Typography variant="h2" sx={{mb: 2, fontWeight: 'bold'}}>
                404
            </Typography>
            <Typography variant="h5" sx={{mb: 4}}>
                {isRom ? `Hopa! Pagina pe care o cauți nu există.` : `Oops! The page you're looking for doesn't exist.`}
            </Typography>

            <Button
                variant="contained"
                component={Link}
                to={`${import.meta.env.BASE_URL}`}
                sx={{
                    backgroundColor: '#ffffff',
                    color: '#050A30',
                    padding: '10px 20px',
                    '&:hover': {
                        backgroundColor: '#f0f0f0',
                        color: '#050A30',
                    },
                }}
            >
                {isRom ? 'Acasa' : 'Go Home'}
            </Button>
        </Box>
    );
};