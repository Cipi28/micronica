import * as React from 'react';
import {Divider, MenuItem, Button, Container, Menu, Typography, IconButton, Toolbar, Box, AppBar, Switch} from "@mui/material";
import {Link} from "react-router-dom";
import {Facebook, LinkedIn, Instagram, Email, Room, Phone} from '@mui/icons-material';
import {useLanguage} from '../../configs/LanguageProvider.jsx';
import {openFacebookProfile, openInstagramProfile, openEmailClient, openMapsLocation, openPhoneDialer} from "../../services/redirectServices.jsx";
import logo from "../../assets/logo.svg";

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
                <Container maxWidth="full" sx={{
                    pr: 0, pl: 0,
                    '@media (min-width:600px)': {
                        pl: 0,
                    },
                }}>
                    <Toolbar disableGutters>
                        <Box
                            sx={{
                                    display: {xs: 'none', md: 'flex'},
                                    pl: 1
                                }}
                        >
                        <img src={logo} alt="Logo" className="logo"/>
                        </Box>
                        <Box
                            sx={{
                                mt: 1,
                                flexGrow: 1,
                                display: {xs: 'flex', md: 'none'},
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            <img src={logo} alt="Logo" style={{ width: '12rem' }} />
                            <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                <Button
                                    sx={{
                                        my: 2,
                                        color: 'white',
                                        display: 'block',
                                        fontFamily: 'Montserrat, Arial, sans-serif',
                                        fontSize: '0.8rem',
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
                                        fontFamily: 'Montserrat, Arial, sans-serif',
                                        fontSize: '0.8rem',
                                        transition: 'background-color 0.3s ease, color 0.3s ease',
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
                                        fontFamily: 'Montserrat, Arial, sans-serif',
                                        fontSize: '0.8rem',
                                        transition: 'background-color 0.3s ease, color 0.3s ease',
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
                                    fontFamily: 'Montserrat, Arial, sans-serif',
                                    fontSize: '1rem',
                                    transition: 'background-color 0.3s ease, color 0.3s ease',
                                    '&:hover': {
                                        color: '#0080FF',
                                    },
                                    '@media (max-width:1175px)': {
                                        mt: 2,
                                        fontSize: '0.9rem',
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
                                    fontFamily: 'Montserrat, Arial, sans-serif',
                                    fontSize: '1rem',
                                    transition: 'background-color 0.3s ease, color 0.3s ease',
                                    '&:hover': {
                                        color: '#0080FF',
                                    },
                                    '@media (max-width:1175px)': {
                                        mt: 2,
                                        fontSize: '0.9rem',
                                    },
                                }}
                                onClick={e => handleHover(e)}
                            >
                                {isRom ? 'SERVICII' : 'OUR SERVICES'}
                            </Button>
                            <Menu
                                id="services-menu"
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
                                        fontFamily: 'Montserrat, Arial, sans-serif',
                                        fontSize: '0.75rem',
                                        paddingTop: '0px',
                                        paddingBottom: '0px',
                                        minHeight: 'auto',
                                        maxWidth: '20rem',
                                        whiteSpace: 'normal',   // Allows text to wrap to the next line
                                        wordWrap: 'break-word', // Breaks long words if necessary
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
                                        fontFamily: 'Montserrat, Arial, sans-serif',
                                        fontSize: '0.75rem',
                                        paddingTop: '0px',
                                        paddingBottom: '0px',
                                        minHeight: 'auto',
                                        whiteSpace: 'normal',
                                        wordWrap: 'break-word',
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
                                        fontFamily: 'Montserrat, Arial, sans-serif',
                                        fontSize: '0.75rem',
                                        paddingTop: '0px',
                                        paddingBottom: '0px',
                                        minHeight: 'auto',
                                        whiteSpace: 'normal',
                                        wordWrap: 'break-word',
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
                                        fontFamily: 'Montserrat, Arial, sans-serif',
                                        fontSize: '0.75rem',
                                        paddingTop: '0px',
                                        paddingBottom: '0px',
                                        minHeight: 'auto',
                                        whiteSpace: 'normal',
                                        wordWrap: 'break-word',
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
                                        fontFamily: 'Montserrat, Arial, sans-serif',
                                        fontSize: '0.75rem',
                                        paddingTop: '0px',
                                        paddingBottom: '0px',
                                        minHeight: 'auto',
                                        whiteSpace: 'normal',
                                        wordWrap: 'break-word',
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
                                        fontFamily: 'Montserrat, Arial, sans-serif',
                                        fontSize: '0.75rem',
                                        paddingTop: '0px',
                                        paddingBottom: '0px',
                                        minHeight: 'auto',
                                        whiteSpace: 'normal',
                                        wordWrap: 'break-word',
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
                                    fontFamily: 'Montserrat, Arial, sans-serif',
                                    fontSize: '1rem',
                                    transition: 'background-color 0.3s ease, color 0.3s ease',
                                    '&:hover': {
                                        color: '#0080FF',
                                    },
                                    '@media (max-width:1175px)': {
                                        mt: 2,
                                        fontSize: '0.9rem',
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
                            '@media (max-width:1175px)': {
                                gap: 0,
                            },
                        }}>
                            <IconButton
                                onClick={() => openFacebookProfile()}
                                color="inherit" sx={{
                                fontSize: 38, '@media (max-width:1175px)': {fontSize: 28},
                                transition: 'background-color 0.3s ease, color 0.3s ease',
                                '&:hover': {
                                    color: '#0080FF',
                                },
                            }}
                            >
                                <Facebook fontSize="inherit"/>
                            </IconButton>
                            <IconButton color="inherit" sx={{
                                fontSize: 35, '@media (max-width:1175px)': {fontSize: 28},
                                transition: 'background-color 0.3s ease, color 0.3s ease',
                                '&:hover': {
                                    color: '#0080FF',
                                },
                            }}>
                                <LinkedIn fontSize="inherit"/>
                            </IconButton>
                            <IconButton
                                onClick={() => openInstagramProfile()}
                                color="inherit" sx={{
                                fontSize: 35, '@media (max-width:1175px)': {fontSize: 28},
                                transition: 'background-color 0.3s ease, color 0.3s ease',
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
                                fontSize: 35, '@media (max-width:1175px)': {fontSize: 28},
                                transition: 'background-color 0.3s ease, color 0.3s ease',
                                '&:hover': {
                                    color: '#0080FF',
                                },
                            }}>
                                <Email fontSize="inherit"/>
                            </IconButton>
                            <IconButton
                                onClick={() => openMapsLocation()}
                                color="inherit" sx={{
                                fontSize: 35, '@media (max-width:1175px)': {fontSize: 28},
                                transition: 'background-color 0.3s ease, color 0.3s ease',
                                '&:hover': {
                                    color: '#0080FF',
                                },
                            }}>
                                <Room fontSize="inherit"/>
                            </IconButton>
                            <IconButton
                                onClick={() => openPhoneDialer()}
                                color="inherit" sx={{
                                fontSize: 35, '@media (max-width:1175px)': {fontSize: 28},
                                transition: 'background-color 0.3s ease, color 0.3s ease',
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
                                alignItems: 'center',
                                border: '2px solid white',
                                borderRadius: '50px',
                                padding: '0px 0px',
                                mr: {xs: 1, md: 0}
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
                                sx={{fontSize: {xs: '0.9rem', md: '1.2rem'}, color: '#ffffff', mb: 0, mr: 1, fontWeight: 'bold'}}
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