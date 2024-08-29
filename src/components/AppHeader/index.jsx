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
import {styled} from '@mui/material/styles';
import {Link} from "react-router-dom";
import { Facebook, LinkedIn, Instagram, Pinterest, Email, Room, Phone  } from '@mui/icons-material'; // Importing necessary icons

const DrawerHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
}));

const DrawerHeaderMain = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    ...theme.mixins.toolbar,
}));

export const AppHeader = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
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
                                display: { xs: 'flex', md: 'none' },
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
                                    display: { xs: 'flex', md: 'none' },
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                    mb: 1, // Add margin-bottom to space it from the buttons below
                                }}
                            >
                                MICRONICA
                            </Typography>

                            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <Button
                                    sx={{ my: 1, color: 'white', display: 'block' }}
                                    component={Link}
                                    to={`/micronica/about-us`}
                                >
                                    ABOUT US
                                </Button>
                                <Button
                                    sx={{ my: 1, color: 'white', display: 'block' }}
                                    component={Link}
                                    onClick={e => handleHover(e)}
                                >
                                    OUR SERVICES
                                </Button>
                                <Button
                                    sx={{ my: 1, color: 'white', display: 'block' }}
                                    component={Link}
                                    to={`/micronica/contact-us`}
                                >
                                    CONTACT US
                                </Button>
                            </Box>
                        </Box>
                        <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                            <Button
                                key='aboutUS'
                                sx={{my: 2, color: 'white', display: 'block'}}
                                onClick={() => {
                                }}
                                component={Link} to={`/micronica/about-us`}
                            >
                                ABOUT US
                            </Button>
                            <Button
                                key='services'
                                sx={{my: 2, color: 'white', display: 'block'}}
                                onClick={e => handleHover(e)}
                            >
                                OUR SERVICES
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
                                    sx={{fontSize: '0.75rem'}}
                                    component={Link} to={`/micronica/cnc-machining`}
                                    onClick={handleOffHover}
                                >
                                    CNC MACHINING
                                </MenuItem>
                                <Divider/>
                                <MenuItem
                                    sx={{fontSize: '0.75rem'}}
                                    component={Link} to={`/micronica/3d-printing`}
                                    onClick={handleOffHover}
                                >
                                    3D PRINTING
                                </MenuItem>
                                <Divider/>
                                <MenuItem
                                    sx={{fontSize: '0.75rem'}}
                                    component={Link} to={`/micronica/injection-of-plastic-parts`}
                                    onClick={handleOffHover}
                                >
                                    INJECTION OF PLASTIC PARTS
                                </MenuItem>
                                <Divider/>
                                <MenuItem
                                    sx={{fontSize: '0.75rem'}}
                                    component={Link} to={`/micronica/laser-engraving`}
                                    onClick={handleOffHover}
                                >
                                    LASER ENGRAVING
                                </MenuItem>
                                <Divider/>
                                <MenuItem
                                    sx={{fontSize: '0.75rem'}}
                                    component={Link} to={`/micronica/tig-wig-mig-mag-welding`}
                                    onClick={handleOffHover}
                                >
                                    IG/WIG/MIG/MAG WELDING
                                </MenuItem>
                                <Divider/>
                                <MenuItem
                                    sx={{fontSize: '0.75rem'}}
                                    component={Link} to={`/micronica/mechanical-pneumatic-hydraulic-devices-and-systems`}                                    onClick={handleOffHover}
                                >
                                    MECHANICAL, PNEUMATIC AND HYDRAULIC DEVICES AND SYSTEMS
                                </MenuItem>
                            </Menu>
                            <Button
                                key='contact'
                                sx={{my: 2, color: 'white', display: 'block'}}
                                onClick={() => {
                                }}
                                component={Link} to={`/micronica/contact-us`}
                            >
                                CONTACT US
                            </Button>
                        </Box>
                        <Box sx={{ flexGrow: 0,
                            display: {xs: 'none', md: 'flex'},
                            gap: 3,
                            '@media (max-width:1100px)': {
                                gap: 0,
                            },
                        }}>
                            <IconButton color="inherit" sx={{ fontSize: 40, '@media (max-width:1100px)': {fontSize: 28}, }}>
                                <Facebook fontSize="inherit" />
                            </IconButton>
                            <IconButton color="inherit" sx={{ fontSize: 40, '@media (max-width:1100px)': {fontSize: 28}, }}>
                                <LinkedIn fontSize="inherit" />
                            </IconButton>
                            <IconButton color="inherit" sx={{ fontSize: 40, '@media (max-width:1100px)': {fontSize: 28}, }}>
                                <Instagram fontSize="inherit" />
                            </IconButton>
                            <IconButton color="inherit" sx={{ fontSize: 40, '@media (max-width:1100px)': {fontSize: 28}, }}>
                                <Pinterest fontSize="inherit" />
                            </IconButton>
                            <Divider orientation="vertical" flexItem sx={{ height: 58, backgroundColor: 'white' }} />
                            <IconButton color="inherit" sx={{ fontSize: 40, '@media (max-width:1100px)': {fontSize: 28}, }}>
                                <Email fontSize="inherit" />
                            </IconButton>
                            <IconButton color="inherit" sx={{ fontSize: 40, '@media (max-width:1100px)': {fontSize: 28}, }}>
                                <Room fontSize="inherit" />
                            </IconButton>
                            <IconButton color="inherit" sx={{ fontSize: 40, '@media (max-width:1100px)': {fontSize: 28}, }}>
                                <Phone fontSize="inherit" />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
}