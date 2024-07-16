import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea, useMediaQuery} from '@mui/material';
import Box from "@mui/material/Box";
import {useTheme} from '@mui/material/styles';

export default function PageCard({title, image}) {
    const theme = useTheme();

    return (
        <Card sx={{
            padding: 0,
            maxWidth: 450,
            maxHeight: 450,
            '@media (max-width:900px)': {
                maxWidth: 275,
                maxHeight: 275,
            },
            display: 'flex', flexDirection: 'column', height: '100%'
        }}>
            <CardActionArea sx={{flex: 1, display: 'flex', flexDirection: 'column'}}>
                <CardMedia
                    component="img"
                    // image="/static/images/cards/contemplative-reptile.jpg"
                    image={image}
                    alt="green iguana"
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