import * as React from "react";
import {Box, Container, Typography, Grid, Paper} from '@mui/material';
import cncImage from '../../assets/homepage/1_cnc_machining.png';
import {useLanguage} from '../../configs/LanguageProvider.jsx';

export const AboutUs = () => {
    const {isRom, setISRom} = useLanguage();
    return (
        <Box
            sx={{
                minHeight: '100vh',
            }}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '100vh',
                }}
            >
                <Container maxWidth="xl">
                    <Box
                        sx={{
                            backgroundColor: '#ffffff',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            p: 5,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            borderRadius: '10px',
                            borderMargin: '5px',
                            borderColor: 'black',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                            '@media (max-width:900px)': {
                                marginTop: 10,
                                p: 2,
                            },
                        }}
                    >
                        <Grid container spacing={5} alignItems="center">
                            <Grid item xs={12} md={6}>
                                <Paper elevation={3} sx={{borderRadius: '10px', overflow: 'hidden', display: {xs: 'none', md: 'flex'}}}>
                                    <img src={cncImage} alt="Micronica Team" style={{width: '100%', height: 'auto'}}/>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} md={6} sx={{pt: 30}}>
                                <Typography
                                    variant="h4"
                                    component="h1"
                                    gutterBottom
                                    sx={{fontWeight: 'bold', color: '#2c3e50', fontSize: {xs: '1.5rem', md: '2.125rem'}, textAlign: 'center'}}
                                >
                                    {isRom ? 'Despre MICRONICA' : 'About MICRONICA'}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    paragraph
                                    sx={{fontSize: {xs: '1rem', md: '1.2rem'}, color: '#34495e', lineHeight: '1.6'}}
                                >
                                    {isRom ? 'Echipa firmei Micronica are o experiență de 20 de ani în domeniul prelucrării CNC ' +
                                        'și al standurilor pentru firmele producătoare de cablaje. Prin profesionalismul și dedicarea lor, ' +
                                        'membrii echipei noastre asigură servicii de înaltă calitate, adaptate nevoilor specifice ale fiecărui client. ' +
                                        'Fiecare proiect este abordat cu precizie și atenție la detalii, garantând rezultate care depășesc așteptările.'
                                        : 'The team at Micronica has 20 years of experience in CNC machining and stands for cable\n' +
                                        'manufacturing companies. Through their professionalism and dedication, our team members provide\n' +
                                        'high-quality services tailored to the specific needs of each client. Each project is approached\n' +
                                        'with precision and attention to detail, ensuring results that exceed expectations.'}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    paragraph
                                    sx={{fontSize: {xs: '1rem', md: '1.2rem'}, color: '#34495e', lineHeight: '1.6'}}
                                >
                                    {isRom ? 'Angajații noștri sunt specialiști bine pregătiți, cu o cunoaștere aprofundată a tehnologiilor de vârf ' +
                                        'din industria prelucrării CNC și a standurilor de cablaje. Colaborând îndeaproape cu clienții noștri, ' +
                                        'reușim să oferim soluții inovatoare și eficiente care să îmbunătățească procesele de producție și să ' +
                                        'sprijine dezvoltarea afacerilor lor.'
                                        : 'Our employees are well-trained specialists with in-depth knowledge of cutting-edge technologies in\n' +
                                        'the CNC machining and cable stand industry. By working closely with our clients, we manage to\n' +
                                        'offer innovative and efficient solutions that enhance production processes and support the growth\n' +
                                        'of their businesses.'}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
};
