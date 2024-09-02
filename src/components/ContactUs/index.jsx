import {Box, Container, Typography, Grid, Paper, TextField, Button, Divider} from '@mui/material';
import IconButton from "@mui/material/IconButton";
import {Email, Phone, Room} from "@mui/icons-material";
import * as React from "react";


export const ContactUs = () => {
    return (
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '100vh',
                    backgroundColor: '#f4f4f9',
                    py: 10,
                }}
            >
                <Container maxWidth="lg">
                    <Grid container spacing={5} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <Box
                                sx={{
                                    backgroundColor: '#ffffff',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    p: 5,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    borderRadius: '10px',  // Rounded corners for the background box
                                    borderMargin: '5px',
                                    borderColor: 'black',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',  // Optional: add a soft shadow for depth
                                    '@media (max-width:900px)': {
                                        marginTop: 10
                                    },
                                }}
                            >
                                <Typography
                                    variant="h4"
                                    component="h1"
                                    gutterBottom
                                    sx={{ fontWeight: 'bold', textAlign: 'center' }}
                                >
                                    Contact Us
                                </Typography>
                                <Typography
                                    variant="body1"
                                    paragraph
                                    sx={{ fontSize: '1.2rem', lineHeight: '1.6' }}
                                >
                                    We are happy to answer your questions, discuss projects you have in mind, or provide you with any other information you need.
                                </Typography>
                                <Typography
                                    variant="body1"
                                    paragraph
                                    sx={{ fontSize: '1.2rem', lineHeight: '1.6' }}
                                >
                                    If you would like to get in touch with us, please use the following contact information:
                                </Typography>
                                <Box sx={{
                                    flexGrow: 0,
                                    display: 'flex',
                                    justifyContent: "center", alignItems: "center",
                                    gap: 3,
                                }}>
                                    <IconButton color="inherit" sx={{
                                        fontSize: 35,
                                        transition: 'background-color 0.3s ease, color 0.3s ease', // Smooth transition for hover effects
                                        '&:hover': {
                                            color: '#0080FF',
                                        },
                                    }}>
                                        <Email fontSize="inherit"/>
                                    </IconButton>
                                    <IconButton color="inherit" sx={{
                                        fontSize: 35,
                                        transition: 'background-color 0.3s ease, color 0.3s ease', // Smooth transition for hover effects
                                        '&:hover': {
                                            color: '#0080FF',
                                        },
                                    }}>
                                        <Room fontSize="inherit"/>
                                    </IconButton>
                                    <IconButton color="inherit" sx={{
                                        fontSize: 35,
                                        transition: 'background-color 0.3s ease, color 0.3s ease', // Smooth transition for hover effects
                                        '&:hover': {
                                            color: '#0080FF',
                                        },
                                    }}>
                                        <Phone fontSize="inherit"/>
                                    </IconButton>
                                </Box>
                            </Box>
                        </Grid>

                        {/* Right Section: Contact Form */}
                        <Grid item xs={12} md={6}>
                            <Paper elevation={3} sx={{ padding: '20px', borderRadius: '10px' }}>
                                <Typography variant="h5" component="h2" gutterBottom>
                                    Get in Touch
                                </Typography>
                                <form noValidate autoComplete="off">
                                    <TextField
                                        required
                                        fullWidth
                                        margin="normal"
                                        label="Your (Company) Name"
                                        variant="outlined"
                                    />
                                    <TextField
                                        required
                                        fullWidth
                                        margin="normal"
                                        label="Your Email"
                                        variant="outlined"
                                        type="email"
                                    />
                                    <TextField
                                        fullWidth
                                        margin="normal"
                                        label="Subject"
                                        variant="outlined"
                                    />
                                    <TextField
                                        fullWidth
                                        margin="normal"
                                        label="Your Message"
                                        variant="outlined"
                                        multiline
                                        rows={4}
                                    />
                                    <Box display="flex" justifyContent="center" alignItems="center">
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            type="submit"
                                            sx={{ marginTop: '16px' }}
                                        >
                                            Send
                                        </Button>
                                    </Box>
                                </form>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
    );
};