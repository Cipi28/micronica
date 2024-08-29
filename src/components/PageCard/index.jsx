import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea} from '@mui/material';
import Box from "@mui/material/Box";
import {Link} from "react-router-dom";

export default function PageCard({title, image, link}) {

    return (
        <Card
            component={Link} to={link}
            // onClick={() => window.location.href = '/services'}
            sx={{
                padding: 0,
                maxWidth: 425,
                maxHeight: 425,
                width: '100%',
                height: '100%',
                '@media (max-width:900px)': {
                    maxWidth: 230,
                    maxHeight: 230,
                },
                display: 'flex', flexDirection: 'column',
                textDecoration: 'none',
                boxShadow: 10, // 3D shadow effect
                borderRadius: 2,
            }}>
            <CardActionArea sx={{ height: '100%', position: 'relative' }}>
                <CardMedia
                    component="img"
                    image={image}
                    alt={`${title} image`}
                    sx={{ height: '100%', width: '100%' }}
                />
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: 0,
                        width: '100%',
                        background: 'rgba(0, 0, 0, 0.5)', // Faded effect
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
                            // marginTop: '1rem',
                            // marginBottom: '1rem',
                            // marginLeft: '2rem',
                            // marginRight: '2rem',
                            '@media (max-width:600px)': {
                                fontSize: '0.5rem',
                            },
                            '@media (min-width:600px)': {
                                fontSize: '0.6rem',
                            },
                            '@media (min-width:960px)': {
                                fontSize: '0.75rem',
                            },
                            '@media (min-width:1280px)': {
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