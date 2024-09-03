import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import {Divider} from "@mui/material";
import {Link} from "react-router-dom";
import {Facebook, LinkedIn, Instagram, Email, Room, Phone} from '@mui/icons-material';
import Switch from '@mui/material/Switch';
import {useLanguage} from '../../configs/LanguageProvider.jsx';
import {openFacebookProfile, openInstagramProfile, openEmailClient} from "../../services/redirectServices.jsx";

import './AppHeader.css';

export const AppHeader = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const {isRom, setISRom} = useLanguage();
    const openMenu = Boolean(anchorEl);

    const handleHover = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleOffHover = () => {
        setAnchorEl(null);
    };

    return (
        <Box>
            <AppBar position="fixed">
                <Container maxWidth="full">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            component={Link} to={`${import.meta.env.BASE_URL}`}
                            sx={{
                                mr: 2,
                                display: {xs: 'none', md: 'flex'},
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            MICRONICA
                        </Typography>

                        <Box
                            sx={{
                                mt: 2,
                                flexGrow: 1,
                                display: {xs: 'flex', md: 'none'},
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            <Typography
                                variant="h5"
                                noWrap
                                component={Link}
                                to={`${import.meta.env.BASE_URL}`}
                                sx={{
                                    display: {xs: 'flex', md: 'none'},
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                    mb: 1,
                                }}
                            >
                                MICRONICA
                            </Typography>

                            <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                <Button
                                    sx={{
                                        my: 2,
                                        color: 'white',
                                        display: 'block',
                                        fontFamily: 'Montserrat, Arial, sans-serif',
                                        fontSize: '0.8rem',
                                        backgroundColor: 'transparent',
                                        transition: 'background-color 0.3s ease, color 0.3s ease',
                                        '&:hover': {
                                            color: '#0080FF',
                                        },
                                    }}
                                    component={Link}
                                    to={`/micronica/about-us`}
                                >
                                    {isRom ? 'DESPRE NOI' : 'ABOUT US'}
                                </Button>
                                <Button
                                    sx={{
                                        my: 2,
                                        color: 'white',
                                        display: 'block',
                                        fontFamily: 'Montserrat, Arial, sans-serif',  // Replace 'CustomFont' with your desired font
                                        fontSize: '0.8rem',  // Adjust the font size if needed
                                        backgroundColor: 'transparent', // Initial background color
                                        transition: 'background-color 0.3s ease, color 0.3s ease', // Smooth transition for hover effects
                                        '&:hover': {
                                            color: '#0080FF',
                                        },
                                    }}
                                    component={Link}
                                    onClick={e => handleHover(e)}
                                >
                                    {isRom ? 'SERVICII' : 'OUR SERVICES'}
                                </Button>
                                <Button
                                    sx={{
                                        my: 2,
                                        color: 'white',
                                        display: 'block',
                                        fontFamily: 'Montserrat, Arial, sans-serif',  // Replace 'CustomFont' with your desired font
                                        fontSize: '0.8rem',  // Adjust the font size if needed
                                        backgroundColor: 'transparent', // Initial background color
                                        transition: 'background-color 0.3s ease, color 0.3s ease', // Smooth transition for hover effects
                                        '&:hover': {
                                            color: '#0080FF',
                                        },
                                    }}
                                    component={Link}
                                    to={`/micronica/contact-us`}
                                >
                                    {isRom ? 'CONTACTE' : 'CONTACTS'}
                                </Button>
                            </Box>
                        </Box>
                        <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                            <Button
                                key='aboutUS'
                                sx={{
                                    my: 2,
                                    color: 'white',
                                    display: 'block',
                                    fontFamily: 'Montserrat, Arial, sans-serif',  // Replace 'CustomFont' with your desired font
                                    fontSize: '1rem',  // Adjust the font size if needed
                                    backgroundColor: 'transparent', // Initial background color
                                    transition: 'background-color 0.3s ease, color 0.3s ease', // Smooth transition for hover effects
                                    '&:hover': {
                                        color: '#0080FF',
                                    },
                                }}
                                onClick={() => {
                                }}
                                component={Link} to={`/micronica/about-us`}
                            >
                                {isRom ? 'DESPRE NOI' : 'ABOUT US'}
                            </Button>
                            <Button
                                key='services'
                                sx={{
                                    my: 2,
                                    color: 'white',
                                    display: 'block',
                                    fontFamily: 'Montserrat, Arial, sans-serif',  // Replace 'CustomFont' with your desired font
                                    fontSize: '1rem',  // Adjust the font size if needed
                                    backgroundColor: 'transparent', // Initial background color
                                    transition: 'background-color 0.3s ease, color 0.3s ease', // Smooth transition for hover effects
                                    '&:hover': {
                                        color: '#0080FF',
                                    },
                                }}
                                onClick={e => handleHover(e)}
                            >
                                {isRom ? 'SERVICII' : 'OUR SERVICES'}
                            </Button>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={openMenu}
                                onClose={handleOffHover}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'center',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'center',
                                }}
                            >
                                <MenuItem
                                    sx={{
                                        display: 'block',
                                        fontFamily: 'Montserrat, Arial, sans-serif',  // Replace 'CustomFont' with your desired font
                                        fontSize: '0.75rem',  // Adjust the font size if needed
                                    }}
                                    component={Link} to={`/micronica/cnc-machining`}
                                    onClick={handleOffHover}
                                >
                                    {isRom ? 'PRELUCRAREA CNC' : 'CNC MACHINING'}
                                </MenuItem>
                                <Divider/>
                                <MenuItem
                                    sx={{
                                        display: 'block',
                                        fontFamily: 'Montserrat, Arial, sans-serif',  // Replace 'CustomFont' with your desired font
                                        fontSize: '0.75rem',  // Adjust the font size if needed
                                    }}
                                    component={Link} to={`/micronica/3d-printing`}
                                    onClick={handleOffHover}
                                >
                                    {isRom ? 'IMPRIMARE 3D PE PUDRĂ, RĂȘINA ȘI FILAMENT' : '3D PRINTING ON POWDER, RESIN & FILAMENT'}
                                </MenuItem>
                                <Divider/>
                                <MenuItem
                                    sx={{
                                        display: 'block',
                                        fontFamily: 'Montserrat, Arial, sans-serif',  // Replace 'CustomFont' with your desired font
                                        fontSize: '0.75rem',  // Adjust the font size if needed
                                    }}
                                    component={Link} to={`/micronica/injection-of-plastic-parts`}
                                    onClick={handleOffHover}
                                >
                                    {isRom ? 'INJECTIA DE MASE DIN PLASTIC' : 'INJECTION OF PLASTIC PARTS'}
                                </MenuItem>
                                <Divider/>
                                <MenuItem
                                    sx={{
                                        display: 'block',
                                        fontFamily: 'Montserrat, Arial, sans-serif',  // Replace 'CustomFont' with your desired font
                                        fontSize: '0.75rem',  // Adjust the font size if needed
                                    }}
                                    component={Link} to={`/micronica/laser-engraving`}
                                    onClick={handleOffHover}
                                >
                                    {isRom ? 'GRAVAREA LASER' : 'LASER ENGRAVING'}
                                </MenuItem>
                                <Divider/>
                                <MenuItem
                                    sx={{
                                        display: 'block',
                                        fontFamily: 'Montserrat, Arial, sans-serif',  // Replace 'CustomFont' with your desired font
                                        fontSize: '0.75rem',  // Adjust the font size if needed
                                    }}
                                    component={Link} to={`/micronica/tig-wig-mig-mag-welding`}
                                    onClick={handleOffHover}
                                >
                                    {isRom ? 'SUDURĂ TIG/WIG/MIG/MAG' : 'TIG/WIG/MIG/MAG WELDING'}
                                </MenuItem>
                                <Divider/>
                                <MenuItem
                                    sx={{
                                        display: 'block',
                                        fontFamily: 'Montserrat, Arial, sans-serif',  // Replace 'CustomFont' with your desired font
                                        fontSize: '0.75rem',  // Adjust the font size if needed
                                    }}
                                    component={Link} to={`/micronica/mechanical-pneumatic-hydraulic-devices-and-systems`} onClick={handleOffHover}
                                >
                                    {isRom ? 'DISPOZITIVE ȘI SISTEME MECANICE, PNEUMATICE ȘI HIDRAULICE' : 'MECHANICAL, PNEUMATIC AND HYDRAULIC DEVICES AND SYSTEMS'}
                                </MenuItem>
                            </Menu>
                            <Button
                                key='contact'
                                sx={{
                                    my: 2,
                                    color: 'white',
                                    display: 'block',
                                    fontFamily: 'Montserrat, Arial, sans-serif',  // Replace 'CustomFont' with your desired font
                                    fontSize: '1rem',  // Adjust the font size if needed
                                    backgroundColor: 'transparent', // Initial background color
                                    transition: 'background-color 0.3s ease, color 0.3s ease', // Smooth transition for hover effects
                                    '&:hover': {
                                        color: '#0080FF',
                                    },
                                }}
                                onClick={() => {
                                }}
                                component={Link} to={`/micronica/contact-us`}
                            >
                                {isRom ? 'CONTACTE' : 'CONTACTS'}
                            </Button>
                        </Box>
                        <Box sx={{
                            flexGrow: 0,
                            display: {xs: 'none', md: 'flex'},
                            gap: 3,
                            '@media (max-width:1150px)': {
                                gap: 0,
                            },
                        }}>
                            <IconButton
                                onClick={() => openFacebookProfile()}
                                color="inherit" sx={{
                                fontSize: 38, '@media (max-width:1150px)': {fontSize: 28},
                                transition: 'background-color 0.3s ease, color 0.3s ease', // Smooth transition for hover effects
                                '&:hover': {
                                    color: '#0080FF',
                                },
                            }}
                            >
                                <Facebook fontSize="inherit"/>
                            </IconButton>
                            <IconButton color="inherit" sx={{
                                fontSize: 35, '@media (max-width:1150px)': {fontSize: 28},
                                transition: 'background-color 0.3s ease, color 0.3s ease', // Smooth transition for hover effects
                                '&:hover': {
                                    color: '#0080FF',
                                },
                            }}>
                                <LinkedIn fontSize="inherit"/>
                            </IconButton>
                            <IconButton
                                onClick={() => openInstagramProfile()}
                                color="inherit" sx={{
                                fontSize: 35, '@media (max-width:1150px)': {fontSize: 28},
                                transition: 'background-color 0.3s ease, color 0.3s ease', // Smooth transition for hover effects
                                '&:hover': {
                                    color: '#0080FF',
                                },
                            }}>
                                <Instagram fontSize="inherit"/>
                            </IconButton>
                            <Divider orientation="vertical" flexItem sx={{height: 58, backgroundColor: 'white'}}/>
                            <IconButton
                                onClick={() => openEmailClient()}
                                color="inherit" sx={{
                                fontSize: 35, '@media (max-width:1150px)': {fontSize: 28},
                                transition: 'background-color 0.3s ease, color 0.3s ease', // Smooth transition for hover effects
                                '&:hover': {
                                    color: '#0080FF',
                                },
                            }}>
                                <Email fontSize="inherit"/>
                            </IconButton>
                            <IconButton color="inherit" sx={{
                                fontSize: 35, '@media (max-width:1150px)': {fontSize: 28},
                                transition: 'background-color 0.3s ease, color 0.3s ease', // Smooth transition for hover effects
                                '&:hover': {
                                    color: '#0080FF',
                                },
                            }}>
                                <Room fontSize="inherit"/>
                            </IconButton>
                            <IconButton color="inherit" sx={{
                                fontSize: 35, '@media (max-width:1150px)': {fontSize: 28},
                                transition: 'background-color 0.3s ease, color 0.3s ease', // Smooth transition for hover effects
                                '&:hover': {
                                    color: '#0080FF',
                                },
                            }}>
                                <Phone fontSize="inherit"/>
                            </IconButton>
                        </Box>
                        <Box
                            sx={{
                                position: {xs: 'absolute', md: 'relative'},
                                right: 2,
                                ml: 1,
                                mb: {xs: 7, md: 0},
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            <Switch
                                onClick={() => {
                                    setISRom(!isRom)
                                }}
                                checked={!isRom}
                                sx={{
                                    '& .MuiSwitch-switchBase.Mui-checked': {
                                        color: '#ffffff',  // Thumb color when checked
                                    },
                                    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                                        backgroundColor: '#ffffff',  // Track color when checked
                                    },
                                    '& .MuiSwitch-switchBase': {
                                        color: '#ffffff',  // Thumb color when unchecked
                                    },
                                    '& .MuiSwitch-track': {
                                        backgroundColor: '#ffffff',  // Track color when unchecked
                                    },
                                }}
                            />
                            <Typography
                                variant="body1"
                                paragraph
                                sx={{fontSize: {xs: '0.9rem', md: '1.2rem'}, color: '#ffffff', mt: 2}}
                            >
                                {isRom ? 'RO' : 'EN'}
                            </Typography>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
}