import * as React from "react";
import {Box, Typography, Container} from '@mui/material';
import {CustomImageList} from "../CustomImageList/index.jsx";
import {useLanguage} from '../../configs/LanguageProvider.jsx';
import ScrollToTopService from "../../services/ScrollToTopService.jsx";

import cncImage from '../../assets/homepage/1_cnc_machining.png';
import TDprinting from '../../assets/homepage/2_3d_printing.png';
import injection from '../../assets/homepage/3_injection of plastic part.png';
import laserEng from '../../assets/homepage/4_laser_engraving.png';
import welding from '../../assets/homepage/5_welding.png';
import pneumHidr from '../../assets/homepage/6_pneumatic&hydraulic.png';

export const InjectionPlastic = () => {
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
                            sx={{fontWeight: 'bold', color: '#2c3e50', fontSize: {xs: '1.5rem', md: '2.125rem'}, textAlign: 'center', mt: {xs: 18, md: 12},}}
                        >
                            {isRom ? 'INJECTIA DE MASE DIN PLASTIC' : 'INJECTION OF PLASTIC PARTS'}
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
                            {isRom ? 'Injecția de piese din plastic este un proces de fabricație în care materialul plastic topit ' +
                                'este injectat într-un tipar pentru a produce componente de diferite forme și dimensiuni. '
                                : 'Injection molding of plastic parts is a manufacturing process in which melted plastic material ' +
                                'is injected into a mold to produce components of various shapes and sizes.'}
                        </Typography>
                        <Typography
                            variant="body1"
                            paragraph
                            sx={{fontSize: {xs: '0.9rem', md: '1.2rem'}, color: '#34495e', lineHeight: '1.6'}}
                        >
                            {isRom ? 'Această metodă este utilizată pe scară largă în industrii precum cea automotive, electronică și ambalaje ' +
                                'datorită capacității sale de a produce rapid și eficient piese de calitate. Datorită versatilității sale, ' +
                                'injecția de piese din plastic permite fabricarea unor produse complexe și precise la costuri reduse.'
                                : 'This method is widely used in industries such as automotive, electronics, and packaging ' +
                                'due to its ability to quickly and efficiently produce high-quality parts.\n' +
                                'Due to its versatility, plastic injection molding enables the manufacturing of complex and precise products at reduced costs.'}
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