import {Box, List, ListItem} from "@mui/material";
import Typography from "@mui/material/Typography";
import {CustomImageList} from "../CustomImageList/index.jsx";
import * as React from "react";
import Container from "@mui/material/Container";

export const ThreeDPrinting = () => {
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
                        3D PRINTING
                    </Typography>
                </Box>
                <CustomImageList itemData={itemData}/>
                <Container maxWidth="lg" sx={{
                    marginTop: 6,
                    marginBottom: 15,
                }}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        3D PRINTING
                    </Typography>
                    <Typography variant="body1" paragraph>
                        <strong>3D printing,</strong> also known as additive manufacturing, is a production process in which three-dimensional objects are created by successively adding thin layers of
                        material. This process is based on a 3D digital model of the object, and the 3D printing machine builds the object by depositing material in consecutive layers.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Here are some important facts about 3D printing:
                    </Typography>
                    <List sx={{
                        listStyleType: 'disc',
                        pl: 2,
                        '& .MuiListItem-root': {
                            display: 'list-item',
                        },
                    }}>
                        <ListItem sx={{display: 'list-item', textAlign: 'left', pl: 0}}>
                            <Typography variant="body1">
                                Digital modeling: To perform 3D printing, it is necessary to start with a three-dimensional digital model of the desired object. This model can be created using 3D
                                modelling software or downloaded from online sources. The digital model defines the shape, dimensions and other characteristics of the object.
                            </Typography>
                        </ListItem>
                        <ListItem sx={{display: 'list-item', textAlign: 'left', pl: 0}}>
                            <Typography variant="body1">
                                Printing process: 3D printing involves feeding a material into the printing machine, which then deposits it in thin layers to build the object. There are several 3D
                                printing technologies, such as FDM (material deposition and fusion), SLA (stereolithography), SLS (selective laser sintering), MJF (multi-jet fusion) and others. Each
                                technology uses different materials and processes to build the object.
                            </Typography>
                        </ListItem>
                        <ListItem sx={{display: 'list-item', textAlign: 'left', pl: 0}}>
                            <Typography variant="body1">
                                Materials used: 3D printing can be done with a variety of materials such as plastic, metal, ceramics, composites, bioprintable materials and many others. There are
                                specific materials for each 3D printing technology and their properties may vary depending on the application.
                            </Typography>
                        </ListItem>
                        <ListItem sx={{display: 'list-item', textAlign: 'left', pl: 0}}>
                            <Typography variant="body1">
                                Applications: 3D printing has a wide range of applications in different industries and fields. This includes rapid prototyping, custom part manufacturing, medical and
                                dental component production, aerospace and automotive component production, architectural modelling and design, jewellery manufacturing and more. 3D printing offers
                                significant flexibility and design freedom compared to traditional manufacturing methods.
                            </Typography>
                        </ListItem>
                        <ListItem sx={{display: 'list-item', textAlign: 'left', pl: 0}}>
                            <Typography variant="body1">
                                3D printing has become increasingly accessible in recent years and the technology has evolved rapidly, opening up new possibilities and applications. It offers
                                advantages such as rapid prototyping, customisation, reduced waste and optimisation of the shape and weight of objects.
                            </Typography>
                        </ListItem>
                    </List>
                </Container>
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