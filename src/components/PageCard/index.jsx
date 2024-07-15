import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, useMediaQuery  } from '@mui/material';
import Box from "@mui/material/Box";
import { useTheme } from '@mui/material/styles';

export default function PageCard() {
    const theme = useTheme();

    return (
        <Card sx={{
            maxWidth: 450,
            maxHeight: 450,
            '@media (max-width:900px)': {
                maxWidth: 275,
                maxHeight: 275,
            },
            display: 'flex', flexDirection: 'column', height: '100%' }}>
            <CardActionArea sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                    component="img"
                    // height="300"
                    // image="/static/images/cards/contemplative-reptile.jpg"
                    image="https://zoobrasov.ro/wp-content/uploads/2019/02/zoo-brasov-6-5-1024x682.jpg"
                    alt="green iguana"
                />
                <Box sx={{ flex: 1, overflow: 'auto' }}>
                    <CardContent>
                        <Typography
                            gutterBottom
                            variant="h6"
                            component="div"
                            sx={{
                                '@media (max-width:600px)': {
                                    fontSize: '1rem',
                                },
                                '@media (min-width:960px)': {
                                    fontSize: '1.5rem',
                                },
                                '@media (min-width:1280px)': {
                                    fontSize: '1.75rem',
                                },
                            }}
                        >
                            Lizard
                        </Typography>

                    </CardContent>
                </Box>
            </CardActionArea>
        </Card>
    );
}