import * as React from 'react';
import {CardActionArea, Box, Typography, CardMedia, Card } from '@mui/material';
import {Link} from "react-router-dom";
import {useState} from "react";

export default function PageCard({title, image, gif, link}) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const handleTouchStart = () => setIsHovered(true);
    const handleTouchEnd = () => setIsHovered(false);

    return (
        <Card
            component={Link} to={link}
            sx={{
                padding: 0,
                maxWidth: 425,
                maxHeight: 300,
                width: '100%',
                height: '100%',
                '@media (max-width:900px)': {
                    maxWidth: 200,
                    maxHeight: 200,
                },
                '@media (max-height: 750px)': {
                    maxWidth: 425,
                    maxHeight: 250,
                },
                '@media (max-height: 675px)': {
                    maxWidth: 350,
                    maxHeight: 200,
                },
                display: 'flex', flexDirection: 'column',
                textDecoration: 'none',
                boxShadow: 10,
                borderRadius: 2,
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            <CardActionArea sx={{height: '100%', position: 'relative'}}>
                <CardMedia
                    component="img"
                    image={isHovered ? gif : image}
                    alt={`${title} image`}
                    sx={{height: '100%', width: '100%'}}
                />
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: 0,
                        width: '100%',
                        background: 'rgba(0, 0, 0, 0.7)',
                        color: 'white',
                        textAlign: 'center',
                        paddingTop: '0.5rem',
                        paddingX: '0.5rem',
                    }}
                >
                    <Typography
                        gutterBottom
                        variant="h6"
                        component="div"
                        sx={{
                            '@media (max-width:600px)': {
                                fontSize: '0.5rem',
                            },
                            '@media (min-width:600px)': {
                                fontSize: '0.9rem',
                            },
                            '@media (min-width:960px)': {
                                fontSize: '1.1rem',
                            },
                            '@media (min-width:1280px)': {
                                fontSize: '1.5rem',
                            },
                            '@media (max-height: 675px)': {
                                fontSize: '1.1rem',
                            },
                        }}
                    >
                        {title}
                    </Typography>
                </Box>
            </CardActionArea>
        </Card>
    );
}