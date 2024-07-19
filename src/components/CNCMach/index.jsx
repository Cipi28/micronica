import {Box, TextField} from '@mui/material';
import Typography from "@mui/material/Typography";
import * as React from "react";
import {CustomImageList} from "../CustomImageList/index.jsx";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

export const CNCMach = () => {
    return (
        <>
            <Box
                sx={{
                    mt: 10,
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        mt: 12,
                    }}
                >
                    <Typography
                        gutterBottom
                        variant="h4"
                        component="div"
                    >
                        CNC MACHINING
                    </Typography>
                </Box>
                <CustomImageList itemData={itemData}/>
            </Box>
        </>
    );
};

const itemData = [
    {
        img: 'https://micronica.webtm.ro/wp-content/uploads/2023/07/3D.jpg',
        title: 'Breakfast',
    },
    {
        img: 'https://micronica.webtm.ro/wp-content/uploads/2023/07/prelucrare-cnc-scaled.jpg',
        title: 'Burger',
    },
    {
        img: 'https://micronica.webtm.ro/wp-content/uploads/2023/03/cnc-laser-cutting-of-metal-modern-industrial-tech-2021-08-26-23-00-56-utc-1.jpg',
        title: 'Camera',
    },
    {
        img: 'https://micronica.webtm.ro/wp-content/uploads/2023/07/micronica-plastic-injection-2.jpg',
        title: 'Coffee',
    },
    {
        img: 'https://micronica.webtm.ro/wp-content/uploads/2023/03/tig-welding-professional-at-work-2023-02-22-18-55-29-utc-1.jpg',
        title: 'Hats',
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