import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea, useMediaQuery} from '@mui/material';
import Box from "@mui/material/Box";

export default function PageCard({title, image}) {

    return (
        <Card sx={{
            padding: 0,
            maxWidth: 430,
            maxHeight: 430,
            '@media (max-width:900px)': {
                maxWidth: 250,
                maxHeight: 250,
            },
            display: 'flex', flexDirection: 'column', height: '100%'
        }}>
            <CardActionArea sx={{flex: 1, display: 'flex', flexDirection: 'column'}}>
                <CardMedia
                    component="img"
                    image={image}
                    alt={`${title} image`}
                />
                <Box sx={{flex: 1, overflow: 'auto'}}>
                    <CardContent sx={{padding: 0, '&:last-child': {paddingBottom: 0}}}>
                        <Typography
                            gutterBottom
                            variant="h6"
                            component="div"
                            sx={{
                                marginTop: '1rem',
                                marginBottom: '1rem',
                                marginLeft: '2rem',
                                marginRight: '2rem',
                                '@media (max-width:600px)': {
                                    fontSize: '0.6rem',
                                },
                                '@media (min-width:600px)': {
                                    fontSize: '0.6rem',
                                },
                                '@media (min-width:960px)': {
                                    fontSize: '0.75rem',
                                },
                                '@media (min-width:1280px)': {
                                    fontSize: '1rem',
                                },
                            }}
                        >
                            {title}
                        </Typography>

                    </CardContent>
                </Box>
            </CardActionArea>
        </Card>
    );
}