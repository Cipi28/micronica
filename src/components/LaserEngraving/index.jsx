import {Box} from '@mui/material';
import Typography from "@mui/material/Typography";
import * as React from "react";
import {CustomImageList} from "../CustomImageList/index.jsx";
import Container from "@mui/material/Container";
import cncImage from '../../assets/homepage/1_cnc_machining.png';
import TDprinting from '../../assets/homepage/2_3d_printing.png';
import injection from '../../assets/homepage/3_injection of plastic part.png';
import laserEng from '../../assets/homepage/4_laser_engraving.png';
import welding from '../../assets/homepage/5_welding.png';
import pneumHidr from '../../assets/homepage/6_pneumatic&hydraulic.png';

export const LaserEngraving = () => {
    return (
        <Box
            sx={{
                minHeight: '100vh',
                backgroundColor: '#f4f4f9',
            }}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '100vh',
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
                            sx={{fontWeight: 'bold', color: '#2c3e50', fontSize: {xs: '1.7rem', md: '2.125rem'}, textAlign: 'center', mt: {xs: 18, md: 12},}}
                        >
                            LASER ENGRAVING
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
                            Laser engraving is a precise marking process where a laser beam is used to remove layers of material from the surface of an object.
                        </Typography>
                        <Typography
                            variant="body1"
                            paragraph
                            sx={{fontSize: {xs: '0.9rem', md: '1.2rem'}, color: '#34495e', lineHeight: '1.6'}}
                        >
                            This technology is widely used in industries such as jewelry, electronics, and advertising for personalizing and decorating products.
                            Due to its precision and flexibility, laser engraving allows for the creation of detailed and durable designs on a variety of materials.
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