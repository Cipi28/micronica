import * as React from "react";
import {Box, Container, Typography } from '@mui/material';
import {CustomImageList} from "../CustomImageList/index.jsx";
import {useLanguage} from '../../configs/LanguageProvider.jsx';
import ScrollToTopService from "../../services/ScrollToTopService.jsx";

import cncImage from '../../assets/homepage/1_cnc_machining.png';
import TDprinting from '../../assets/homepage/2_3d_printing.png';
import injection from '../../assets/homepage/3_injection of plastic part.png';
import laserEng from '../../assets/homepage/4_laser_engraving.png';
import welding from '../../assets/homepage/5_welding.png';
import pneumHidr from '../../assets/homepage/6_pneumatic&hydraulic.png';

export const DevAndSystems = () => {
    const {isRom, setISRom} = useLanguage();
    return (
        <Box
            sx={{
                minHeight: '80vh',
            }}>
            <ScrollToTopService/>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '78vh',
                    mt: 10
                }}
            >
                <Box>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Typography
                            variant="h4"
                            component="h1"
                            gutterBottom
                            sx={{fontWeight: 'bold', color: '#2c3e50', fontSize: {xs: '1.7rem', md: '2.125rem'}, textAlign: 'center', mt: 7, display: {xs: 'none', md: 'flex'} }}
                        >
                            {isRom ? 'DISPOZITIVE ȘI SISTEME MECANICE, PNEUMATICE ȘI HIDRAULICE' : 'MECHANICAL, PNEUMATIC AND HYDRAULIC DEVICES AND SYSTEMS'}
                        </Typography>
                    </Box>
                    <CustomImageList itemData={itemData}/>
                    <Container maxWidth="lg" sx={{
                        marginTop: 4,
                    }}>
                        <Typography
                            variant="body1"
                            paragraph
                            sx={{fontSize: {xs: '0.9rem', md: '1.2rem'}, color: '#34495e', lineHeight: '1.6'}}
                        >
                            {isRom ? 'Dispozitivele și sistemele mecanice folosesc componente fizice, cum ar fi roți dințate, pârghii și fulii, pentru ' +
                                'a transmite forță și mișcare, fiind esențiale în mașinile industriale și echipamentele de producție. '
                                : 'Mechanical devices and systems use physical components like gears, levers, and pulleys to transmit force and motion, ' +
                                'being essential in industrial machines and production equipment.'}
                        </Typography>
                        <Typography
                            variant="body1"
                            paragraph
                            sx={{fontSize: {xs: '0.9rem', md: '1.2rem'}, color: '#34495e', lineHeight: '1.6'}}
                        >
                            {isRom ? 'Sistemele pneumatice utilizează aer comprimat pentru a alimenta cilindri și actuatori, oferind soluții rapide și eficiente ' +
                                'pentru automatizare și control. Sistemele hidraulice folosesc lichid sub presiune pentru a genera forță și mișcare, fiind folosite ' +
                                'în echipamente grele, cum ar fi excavatoarele și prese hidraulice, datorită capacității lor de a manipula sarcini mari cu precizie.'
                                : 'Pneumatic systems utilize compressed air to power cylinders and actuators, providing quick and efficient solutions for automation and control.\n' +
                                'Hydraulic systems use pressurized fluid to generate force and motion, employed in heavy equipment such as excavators ' +
                                'and hydraulic presses due to their ability to handle large loads with precision.'}
                        </Typography>
                    </Container>
                </Box>
            </Box>
        </Box>
    );
};

const itemData = [
    {
        img: cncImage,
        title: 'Breakfast',
    },
    {
        img: TDprinting,
        title: 'Burger',
    },
    {
        img: injection,
        title: 'Camera',
    },
    {
        img: laserEng,
        title: 'Coffee',
    },
    {
        img: welding,
        title: 'Hats',
    },
    {
        img: pneumHidr,
        title: 'Honey',
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
    },
    {
        img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        title: 'Basketball',
    },
    {
        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        title: 'Fern',
    },
    {
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        title: 'Mushrooms',
    },
    {
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        title: 'Tomato basil',
    },
    {
        img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        title: 'Sea star',
    },
    {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title: 'Bike',
    },
];
