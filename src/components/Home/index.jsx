import * as React from "react";
import PageCard from "../PageCard/index.jsx";
import {Box, Grid, Divider, IconButton} from '@mui/material';
import {Email, Facebook, Instagram, LinkedIn, Phone, Room} from "@mui/icons-material";
import {useLanguage} from '../../configs/LanguageProvider.jsx';
import {openEmailClient, openFacebookProfile, openInstagramProfile, openMapsLocation, openPhoneDialer} from "../../services/redirectServices.jsx";
import ScrollToTopService from "../../services/ScrollToTopService.jsx";

import cncImage from '../../assets/homepage/1_cnc_machining.png';
import TDprinting from '../../assets/homepage/2_3d_printing.png';
import injection from '../../assets/homepage/3_injection of plastic part.png';
import laserEng from '../../assets/homepage/4_laser_engraving.png';
import welding from '../../assets/homepage/5_welding.png';
import pneumHidr from '../../assets/homepage/6_pneumatic&hydraulic.png';

export const Home = () => {
    const {isRom, setISRom} = useLanguage();
    return (
        <Box
            sx={{
                display: 'flex',
                height: '80vh',
                width: '100%',
            }}
        >
            <ScrollToTopService/>
            <Box
                sx={{
                    mt: 20,
                    height: '77vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    '@media (max-width:900px)': {
                        mt: 16,
                    },
                    '@media (max-width:600px)': {
                        // mt: 0,
                        // height: '95vh',
                    },
                }}
            >
                <Box
                    w={{base: 'full', md: 60}}
                    h="full">
                    <Box sx={{flexGrow: 0, display: {xs: 'flex', md: 'none'}, alignItems: 'center', marginY: 15, marginLeft: 1, marginRight: 1}}>
                        <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
                            <IconButton
                                onClick={() => openFacebookProfile()}
                                color="inherit" sx={{fontSize: 35}}>
                                <Facebook fontSize="inherit"/>
                            </IconButton>
                            <IconButton color="inherit" sx={{fontSize: 35}}>
                                <LinkedIn fontSize="inherit"/>
                            </IconButton>
                            <IconButton
                                onClick={() => openInstagramProfile()}
                                color="inherit" sx={{fontSize: 35}}>
                                <Instagram fontSize="inherit"/>
                            </IconButton>
                            <Divider orientation="horizontal" sx={{width: '100%', backgroundColor: 'white', my: 1}}/>
                            <IconButton
                                onClick={() => openEmailClient()}
                                color="inherit" sx={{fontSize: 35}}
                            >
                                <Email fontSize="inherit"/>
                            </IconButton>
                            <IconButton
                                onClick={() => openMapsLocation()}
                                color="inherit" sx={{fontSize: 35}}>
                                <Room fontSize="inherit"/>
                            </IconButton>
                            <IconButton
                                onClick={() => openPhoneDialer()}
                                color="inherit" sx={{fontSize: 35}}>
                                <Phone fontSize="inherit"/>
                            </IconButton>
                        </Box>
                    </Box>
                </Box>
                <Grid
                    container
                    spacing={2}
                    justifyContent="center"
                    sx={{
                        '@media (min-width:600px)': {
                            maxWidth: '80%',
                        },
                        maxWidth: '95%',
                        marginRight: 1
                    }}
                >
                    {/* Row 1 */}
                    <Grid item xs={6} sm={6} md={4} display="flex" justifyContent="center">
                        <PageCard
                            title={isRom ? 'PRELUCRAREA CNC' : 'CNC MACHINING'}
                            image={cncImage}
                            link={'/micronica/cnc-machining'}
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={4} display="flex" justifyContent="center">
                        <PageCard
                            title={isRom ? 'IMPRIMARE 3D PE PUDRĂ, RĂȘINA ȘI FILAMENT' : '3D PRINTING ON POWDER, RESIN & FILAMENT'}
                            image={TDprinting}
                            link={'/micronica/3d-printing'}
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={4} display="flex" justifyContent="center">
                        <PageCard
                            title={isRom ? 'INJECTIA DE MASE DIN PLASTIC' : 'INJECTION OF PLASTIC PARTS'}
                            image={injection}
                            link={'/micronica/injection-of-plastic-parts'}
                        />
                    </Grid>
                    {/* Row 2 */}
                    <Grid item xs={6} sm={6} md={4} display="flex" justifyContent="center">
                        <PageCard
                            title={isRom ? 'GRAVAREA LASER' : 'LASER ENGRAVING'}
                            image={laserEng}
                            link={'/micronica/laser-engraving'}
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={4} display="flex" justifyContent="center">
                        <PageCard
                            title={isRom ? 'SUDURĂ TIG/WIG/MIG/MAG' : 'TIG/WIG/MIG/MAG WELDING'}
                            image={welding}
                            link={'/micronica/tig-wig-mig-mag-welding'}
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={4} display="flex" justifyContent="center">
                        <PageCard
                            title={isRom ? 'DISPOZITIVE ȘI SISTEME MECANICE, PNEUMATICE ȘI HIDRAULICE' : 'MECHANICAL, PNEUMATIC AND HYDRAULIC DEVICES AND SYSTEMS'}
                            image={pneumHidr}
                            link={'/micronica/mechanical-pneumatic-hydraulic-devices-and-systems'}
                        />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};