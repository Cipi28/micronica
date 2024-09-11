import * as React from 'react';
import {CardActionArea, Box, Typography, CardMedia, Card } from '@mui/material';
import {Link} from "react-router-dom";

export default function PageCard({title, image, link}) {

    return (
        <Card
            component={Link} to={link}
            sx={{
                padding: 0,
                maxWidth: 325,
                maxHeight: 325,
                width: '100%',
                height: '100%',
                '@media (max-width:900px)': {
                    maxWidth: 200,
                    maxHeight: 200,
                },
                display: 'flex', flexDirection: 'column',
                textDecoration: 'none',
                boxShadow: 10,
                borderRadius: 2,
            }}>
            <CardActionArea sx={{height: '100%', position: 'relative'}}>
                <CardMedia
                    component="img"
                    image={image}
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
                        padding: '0.5rem',
                    }}
                >
                    <Typography
                        gutterBottom
                        variant="h6"
                        component="div"
                        sx={{
                            '@media (max-width:600px)': {
                                fontSize: '0.6rem',
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
                        }}
                    >
                        {title}
                    </Typography>
                </Box>
            </CardActionArea>
        </Card>
    );
}