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
import {Accordion, AccordionDetails, AccordionSummary, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import {styled, useTheme} from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Link} from "react-router-dom";

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
    const [open, setOpen] = React.useState(false);
    const [openMain, setOpenMain] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const openMenu = Boolean(anchorEl);
    const theme = useTheme();

    const handleHover = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleOffHover = () => {
        setAnchorEl(null);
    };

    const handleDrawerOpenMain = () => {
        setOpenMain(true);
    };

    const handleDrawerCloseMain = () => {
        setOpenMain(false);
    };

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };


    return (
        <Box>
            <AppBar position="fixed">
                <Container maxWidth="full">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            component={Link} to="/"
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
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleDrawerOpenMain}
                                color="inherit"
                            >
                                <MenuIcon/>
                            </IconButton>
                        </Box>
                        <Typography
                            variant="h5"
                            noWrap
                            component={Link} to="/"
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
                                component={Link} to="/about-us"
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
                                    component={Link} to="/cnc-machining"
                                    onClick={handleOffHover}
                                >
                                    CNC MACHINING
                                </MenuItem>
                                <Divider/>
                                <MenuItem
                                    sx={{fontSize: '0.75rem'}}
                                    component={Link} to="/3d-printing"
                                    onClick={handleOffHover}
                                >
                                    3D PRINTING
                                </MenuItem>
                                <Divider/>
                                <MenuItem
                                    sx={{fontSize: '0.75rem'}}
                                    component={Link} to="/injection-of-plastic-parts"
                                    onClick={handleOffHover}
                                >
                                    INJECTION OF PLASTIC PARTS
                                </MenuItem>
                                <Divider/>
                                <MenuItem
                                    sx={{fontSize: '0.75rem'}}
                                    component={Link} to="/laser-engraving"
                                    onClick={handleOffHover}
                                >
                                    LASER ENGRAVING
                                </MenuItem>
                                <Divider/>
                                <MenuItem
                                    sx={{fontSize: '0.75rem'}}
                                    component={Link} to="/tig-wig-mig-mag-welding"
                                    onClick={handleOffHover}
                                >
                                    IG/WIG/MIG/MAG WELDING
                                </MenuItem>
                                <Divider/>
                                <MenuItem
                                    sx={{fontSize: '0.75rem'}}
                                    component={Link} to="/mechanical-pneumatic-hydraulic-devices-and-systems"
                                    onClick={handleOffHover}
                                >
                                    MECHANICAL, PNEUMATIC AND HYDRAULIC DEVICES AND SYSTEMS
                                </MenuItem>
                            </Menu>
                            <Button
                                key='contact'
                                sx={{my: 2, color: 'white', display: 'block'}}
                                onClick={() => {
                                }}
                                component={Link} to="/contact-us"
                            >
                                CONTACT US
                            </Button>
                        </Box>

                        <Box sx={{flexGrow: 0, display: {xs: 'none', md: 'flex'}}}>
                            <Tooltip title="Open settings">
                                <IconButton
                                    onClick={handleDrawerOpen}
                                    sx={{p: 0}} size="large"
                                    aria-label="show more" aria-haspopup="true" color="inherit">
                                    <MoreIcon/>
                                </IconButton>
                            </Tooltip>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Drawer
                sx={{
                    width: '20rem',
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: '20rem',
                        boxSizing: 'border-box',
                        height: '100hv',
                        overflow: 'auto',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={openMain}
            >
                <DrawerHeaderMain>
                    <List sx={{width: '100%'}}>
                        <ListItem key={'AboutUs'} disablePadding>
                            <ListItemButton component={Link} to="/about-us" onClick={handleDrawerCloseMain}>
                                <ListItemText primary={'ABOUT US'} sx={{marginLeft: '1rem'}}/>
                            </ListItemButton>
                            <IconButton onClick={handleDrawerCloseMain}
                                        sx={{
                                            justifyContent: 'flex-end',
                                            marginRight: '1rem',
                                        }}
                            >
                                <ChevronLeftIcon/>
                            </IconButton>
                        </ListItem>
                        <Accordion
                            sx={{
                                marginTop: 'none',
                                boxShadow: 'none',
                                border: 'none',
                                '&:before': {
                                    display: 'none',
                                },
                            }}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon/>}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                <Typography sx={{marginLeft: '1rem'}}>OUR SERVICES</Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{padding: 0}}>
                                <List sx={{padding: 0}}>
                                    <ListItem key={'CNC'} disablePadding>
                                        <ListItemButton component={Link} to="/cnc-machining" onClick={handleDrawerCloseMain}>
                                            <ListItemText primary={'CNC MACHINING'} sx={{marginLeft: '2rem'}} primaryTypographyProps={{fontSize: '0.75rem'}}/>
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem key={'3D'} disablePadding>
                                        <ListItemButton component={Link} to="/3d-printing" onClick={handleDrawerCloseMain}>
                                            <ListItemText primary={'3D PRINTING'} sx={{marginLeft: '2rem'}} primaryTypographyProps={{fontSize: '0.75rem'}}/>
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem key={'INJECTION'} disablePadding>
                                        <ListItemButton component={Link} to="/injection-of-plastic-parts" onClick={handleDrawerCloseMain}>
                                            <ListItemText primary={'INJECTION OF PLASTIC PARTS'} sx={{marginLeft: '2rem'}} primaryTypographyProps={{fontSize: '0.75rem'}}/>
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem key={'LASER'} disablePadding>
                                        <ListItemButton component={Link} to="/laser-engraving" onClick={handleDrawerCloseMain}>
                                            <ListItemText primary={'LASER ENGRAVING'} sx={{marginLeft: '2rem'}} primaryTypographyProps={{fontSize: '0.75rem'}}/>
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem key={'TIG'} disablePadding>
                                        <ListItemButton component={Link} to="/tig-wig-mig-mag-welding" onClick={handleDrawerCloseMain}>
                                            <ListItemText primary={'TIG/WIG/MIG/MAG WELDING'} sx={{marginLeft: '2rem'}} primaryTypographyProps={{fontSize: '0.75rem'}}/>
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem key={'MECHANICAL'} disablePadding>
                                        <ListItemButton component={Link} to="/mechanical-pneumatic-hydraulic-devices-and-systems" onClick={handleDrawerCloseMain}>
                                            <ListItemText primary={'MECHANICAL, PNEUMATIC AND HYDRAULIC DEVICES AND SYSTEMS'} sx={{marginLeft: '2rem'}} primaryTypographyProps={{fontSize: '0.75rem'}}/>
                                        </ListItemButton>
                                    </ListItem>
                                </List>
                            </AccordionDetails>
                        </Accordion>
                        <ListItem key={'ContactUs'} disablePadding>
                            <ListItemButton component={Link} to="/contact-us" onClick={handleDrawerCloseMain}>
                                <ListItemText primary={'CONTACT US'} sx={{marginLeft: '1rem'}}/>
                            </ListItemButton>
                        </ListItem>
                    </List>
                </DrawerHeaderMain>
                <Divider/>
                <List>
                    <ListItem key={'Address'} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <InboxIcon/>
                            </ListItemIcon>
                            <ListItemText primary={'Address'}/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem key={'Mail'} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <InboxIcon/>
                            </ListItemIcon>
                            <ListItemText primary={'Mail'}/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem key={'Phone'} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <InboxIcon/>
                            </ListItemIcon>
                            <ListItemText primary={'Phone'}/>
                        </ListItemButton>
                    </ListItem>
                </List>
                <Divider/>
                <List>
                    <ListItem key={'Facebook'} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <InboxIcon/>
                            </ListItemIcon>
                            <ListItemText primary={'Facebook'}/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem key={'Linkedin'} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <InboxIcon/>
                            </ListItemIcon>
                            <ListItemText primary={'LinkedIn'}/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem key={'Instagram'} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <InboxIcon/>
                            </ListItemIcon>
                            <ListItemText primary={'Instagram'}/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem key={'Pinterest'} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <InboxIcon/>
                            </ListItemIcon>
                            <ListItemText primary={'Pinterest'}/>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
            <Drawer
                sx={{
                    width: '20rem',
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: '20rem',
                    },
                }}
                variant="persistent"
                anchor="right"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                    </IconButton>
                    <ListItem key={'contactInfo'} disablePadding
                              sx={{
                                  marginLeft: '1rem',
                              }}
                    >
                        <ListItemText
                            primary={'Contact Info'}
                            primaryTypographyProps={{
                                fontSize: '1.25rem',
                                fontWeight: 'bold',
                            }}/>
                    </ListItem>
                </DrawerHeader>
                <Divider/>
                <List>
                    <ListItem key={'Address'} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <InboxIcon/>
                            </ListItemIcon>
                            <ListItemText primary={'Address'}/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem key={'Mail'} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <InboxIcon/>
                            </ListItemIcon>
                            <ListItemText primary={'Mail'}/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem key={'Phone'} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <InboxIcon/>
                            </ListItemIcon>
                            <ListItemText primary={'Phone'}/>
                        </ListItemButton>
                    </ListItem>
                </List>
                <Divider/>
                <List>
                    <ListItem key={'Facebook'} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <InboxIcon/>
                            </ListItemIcon>
                            <ListItemText primary={'Facebook'}/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem key={'Linkedin'} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <InboxIcon/>
                            </ListItemIcon>
                            <ListItemText primary={'LinkedIn'}/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem key={'Instagram'} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <InboxIcon/>
                            </ListItemIcon>
                            <ListItemText primary={'Instagram'}/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem key={'Pinterest'} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <InboxIcon/>
                            </ListItemIcon>
                            <ListItemText primary={'Pinterest'}/>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
        </Box>
    );
}