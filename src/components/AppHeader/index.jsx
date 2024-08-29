import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import MoreIcon from "@mui/icons-material/MoreVert";
import {Accordion, AccordionDetails, AccordionSummary, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, useMediaQuery } from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import {styled, useTheme} from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Link} from "react-router-dom";
import { Facebook, LinkedIn, Instagram, Pinterest, Email, Room, Phone  } from '@mui/icons-material'; // Importing necessary icons

import {
    CloseButton,
    Flex,
    Icon,
    useColorModeValue,
    Text,
    Drawer,
    DrawerContent,
} from '@chakra-ui/react'
import {
    FiHome,
    FiTrendingUp,
    FiCompass,
    FiStar,
    FiSettings,
    FiMenu,
} from 'react-icons/fi'

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
    const theme = useTheme();
    const isSmallScreen = useMediaQuery('(max-width:900px)');

    const handleHover = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleOffHover = () => {
        setAnchorEl(null);
    };

    const SidebarContent = () => {
        return (
            <Box
                borderRight="1px"
                w={{ base: 'full', md: 60 }}
                pos="fixed"
                h="full">
                <Box sx={{ flexGrow: 0, display: {xs: 'flex', md: 'none'}, alignItems: 'center', marginY: 20, marginX:2 }}>
                    {/* Container for Social Media Icons */}
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                        <IconButton color="inherit" sx={{ fontSize: 35 }}>
                            <Facebook fontSize="inherit" />
                        </IconButton>
                        <IconButton color="inherit" sx={{ fontSize: 35 }}>
                            <LinkedIn fontSize="inherit" />
                        </IconButton>
                        <IconButton color="inherit" sx={{ fontSize: 35 }}>
                            <Instagram fontSize="inherit" />
                        </IconButton>
                        <IconButton color="inherit" sx={{ fontSize: 35 }}>
                            <Pinterest fontSize="inherit" />
                        </IconButton>
                        <Divider orientation="horizontal" sx={{ width: '100%', backgroundColor: 'white', my: 1 }} />
                        <IconButton color="inherit" sx={{ fontSize: 35 }}>
                            <Email fontSize="inherit" />
                        </IconButton>
                        <IconButton color="inherit" sx={{ fontSize: 35 }}>
                            <Room fontSize="inherit" />
                        </IconButton>
                        <IconButton color="inherit" sx={{ fontSize: 35 }}>
                            <Phone fontSize="inherit" />
                        </IconButton>
                    </Box>

                    {/* Vertical Divider */}
                    {/*<Divider orientation="vertical" flexItem sx={{ height: 'auto', backgroundColor: 'white', mx: 1 }} />*/}
                </Box>
            </Box>
        )
    }


    return (
        <Box>
            <Drawer
                isOpen
                placement="left"
                size="xs">
                <DrawerContent>
                    <SidebarContent />
                </DrawerContent>
            </Drawer>
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

                        <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                        </Box>
                        <Typography
                            variant="h5"
                            noWrap
                            component={Link} to={`${import.meta.env.BASE_URL}`}
                            sx={{
                                mr: 2,
                                display: {xs: 'flex', md: 'none'},
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            MICRONICA
                        </Typography>
                        <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                            <Button
                                key='aboutUS'
                                sx={{my: 2, color: 'white', display: 'block'}}
                                onClick={() => {
                                }}
                                component={Link} to={`${import.meta.env.BASE_URL}about-us`}
                            >
                                ABOUT US
                            </Button>
                            <Button
                                key='services'
                                sx={{my: 2, color: 'white', display: 'block'}}
                                onMouseEnter={handleHover}
                                // onMouseLeave={() => {
                                //     handleOffHover()
                                // }}
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
                            >
                                <MenuItem
                                    sx={{fontSize: '0.75rem'}}
                                    component={Link} to={`${import.meta.env.BASE_URL}cnc-machining`}
                                    onClick={handleOffHover}
                                >
                                    CNC MACHINING
                                </MenuItem>
                                <Divider/>
                                <MenuItem
                                    sx={{fontSize: '0.75rem'}}
                                    component={Link} to={`${import.meta.env.BASE_URL}3d-printing`}
                                    onClick={handleOffHover}
                                >
                                    3D PRINTING
                                </MenuItem>
                                <Divider/>
                                <MenuItem
                                    sx={{fontSize: '0.75rem'}}
                                    component={Link} to={`${import.meta.env.BASE_URL}injection-of-plastic-parts`}
                                    onClick={handleOffHover}
                                >
                                    INJECTION OF PLASTIC PARTS
                                </MenuItem>
                                <Divider/>
                                <MenuItem
                                    sx={{fontSize: '0.75rem'}}
                                    component={Link} to={`${import.meta.env.BASE_URL}laser-engraving`}
                                    onClick={handleOffHover}
                                >
                                    LASER ENGRAVING
                                </MenuItem>
                                <Divider/>
                                <MenuItem
                                    sx={{fontSize: '0.75rem'}}
                                    component={Link} to={`${import.meta.env.BASE_URL}tig-wig-mig-mag-welding`}
                                    onClick={handleOffHover}
                                >
                                    IG/WIG/MIG/MAG WELDING
                                </MenuItem>
                                <Divider/>
                                <MenuItem
                                    sx={{fontSize: '0.75rem'}}
                                    component={Link} to={`${import.meta.env.BASE_URL}mechanical-pneumatic-hydraulic-devices-and-systems`}                                    onClick={handleOffHover}
                                >
                                    MECHANICAL, PNEUMATIC AND HYDRAULIC DEVICES AND SYSTEMS
                                </MenuItem>
                            </Menu>
                            <Button
                                key='contact'
                                sx={{my: 2, color: 'white', display: 'block'}}
                                onClick={() => {
                                }}
                                component={Link} to={`${import.meta.env.BASE_URL}contact-us`}
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
            {isSmallScreen && (
                <AppBar position="static" sx={{ top: 'auto', bottom: 0, bgcolor: 'grey', color: 'white', pt:8 }}>
                    <Container maxWidth="full">
                        <Toolbar disableGutters>
                            <Button
                                sx={{ my: 2, color: 'white', display: 'block' }}
                                component={Link}
                                to={`${import.meta.env.BASE_URL}about-us`}
                            >
                                ABOUT US
                            </Button>
                            <Button
                                sx={{ my: 2, color: 'white', display: 'block' }}
                                component={Link}
                                to={`${import.meta.env.BASE_URL}services`}
                            >
                                OUR SERVICES
                            </Button>
                            <Button
                                sx={{ my: 2, color: 'white', display: 'block' }}
                                component={Link}
                                to={`${import.meta.env.BASE_URL}contact-us`}
                            >
                                CONTACT US
                            </Button>
                        </Toolbar>
                    </Container>
                </AppBar>
            )}
        </Box>
    );
}