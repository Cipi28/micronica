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
import AdbIcon from '@mui/icons-material/Adb';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from "@mui/icons-material/MoreVert";
import {Accordion, AccordionDetails, AccordionSummary, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import {styled, useTheme} from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const pages = ['ABOUT US', 'OUR SERVICES', 'CONTACT US']; //todo: set the actual pages

const DrawerHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
}));

const DrawerHeaderMain = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    // padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    // justifyContent: 'flex-end',
}));

export const AppHeader = () => {
    const [open, setOpen] = React.useState(false);
    const [openMain, setOpenMain] = React.useState(false);
    const theme = useTheme();

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
                            component="a"
                            // href="/" todo: try to go to home without rerendering the page
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
                            component="a"
                            href="#app-bar-with-responsive-menu"
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
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    sx={{my: 2, color: 'white', display: 'block'}}
                                    onClick={() => {
                                    }}
                                >
                                    {page}
                                </Button>
                            ))}
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
                    },
                }}
                variant="persistent"
                anchor="left"
                open={openMain}
            >
                <DrawerHeaderMain>
                    <List sx={{width: '100%'}}>
                        <ListItem key={'AboutUs'} disablePadding>
                            <ListItemButton>
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
                                boxShadow: 'none',  // Remove shadow
                                border: 'none',     // Remove border
                                '&:before': {
                                    display: 'none', // Remove the default divider line
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
                                        <ListItemButton>
                                            <ListItemText primary={'CNC MACHINING'} sx={{marginLeft: '2rem'}}/>
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem key={'3D'} disablePadding>
                                        <ListItemButton>
                                            <ListItemText primary={'3D PRINTING'} sx={{marginLeft: '2rem'}}/>
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem key={'INJECTION'} disablePadding>
                                        <ListItemButton>
                                            <ListItemText primary={'INJECTION OF PLASTIC PARTS'} sx={{marginLeft: '2rem'}}/>
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem key={'LASER'} disablePadding>
                                        <ListItemButton>
                                            <ListItemText primary={'LASER ENGRAVING'} sx={{marginLeft: '2rem'}}/>
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem key={'TIG'} disablePadding>
                                        <ListItemButton>
                                            <ListItemText primary={'TIG/WIG/MIG/MAG WELDING'} sx={{marginLeft: '2rem'}}/>
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem key={'MECHANICAL'} disablePadding>
                                        <ListItemButton>
                                            <ListItemText primary={'MECHANICAL, PNEUMATIC AND HYDRAULIC DEVICES AND SYSTEMS'} sx={{marginLeft: '2rem'}}/>
                                        </ListItemButton>
                                    </ListItem>
                                </List>
                            </AccordionDetails>
                        </Accordion>
                        <ListItem key={'ContactUs'} disablePadding>
                            <ListItemButton>
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
                                fontSize: '1.25rem', // Adjust the font size as needed
                                fontWeight: 'bold',  // Optionally, adjust the font weight
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