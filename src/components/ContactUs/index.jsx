import {Box, Container, Typography, Grid, Paper, TextField, Button} from '@mui/material';
import IconButton from "@mui/material/IconButton";
import {Email, Phone, Room} from "@mui/icons-material";
import * as React from "react";
import {useLanguage} from '../../configs/LanguageProvider.jsx';
import {useState} from "react";
import emailjs from 'emailjs-com';

const DEFAULT_SUBJECT = "Email trimis de pe site-ul MICRONICA"

export const ContactUs = () => {
    const {isRom, setISRom} = useLanguage();

    //todo: default SUBJECT
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [errors, setErrors] = useState({});

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const validateForm = () => {
        let formErrors = {};

        // Name validation
        if (!formData.name || formData.name.length < 3) {
            formErrors.name = isRom ? 'Numele trebuie să aibă cel puțin 3 caractere' : 'Name must be at least 3 characters';
        }

        // Email validation
        if (!formData.email) {
            formErrors.email = isRom ? 'E-mailul este obligatoriu' : 'Email is required';
        } else if (!emailRegex.test(formData.email)) {
            formErrors.email = isRom ? 'Format de e-mail invalid' : 'Invalid email format';
        }

        // Message validation
        if (!formData.message || formData.message.length < 15) {
            formErrors.message = isRom ? 'Mesajul trebuie să aibă cel puțin 15 caractere' : 'Message must be at least 15 characters';
        }

        setErrors(formErrors);

        return Object.keys(formErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {

            var sentData = formData;
            if(sentData.subject === '') {
                sentData.subject = DEFAULT_SUBJECT;
            }
            emailjs.init('_oITw2nA-QrpG8wQH');

            emailjs.send(
                'service_up4yv27',
                'template_62b1vj9',
                sentData,
            ).then(
                (response) => {
                    alert(isRom ? 'Mesajul a fost trimis cu succes' : 'The message has been successfully sent');
                },
                (error) => {
                    alert(isRom ? 'Eroare: mesajul nu a fost trimis. Încercați din nou mai târziu' : 'Error: The message wasn\'t sent. Try again later');
                    console.log(error);
                }
            );

            setFormData({
                name: '',
                email: '',
                subject: '',
                message: '',
            });

            setErrors({});
        }
    };

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
                                    {isRom ? 'Contacte' : 'Contacts'}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    paragraph
                                    sx={{ fontSize: '1.2rem', lineHeight: '1.6' }}
                                >
                                    {isRom
                                        ? 'Suntem bucuroși să vă răspundem la întrebări, să discutăm despre proiectele pe care le aveți în vedere sau să vă oferim orice alte informații de care aveți nevoie.'
                                        : 'We are happy to answer your questions, discuss projects you have in mind, or provide you with any other information you need.'}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    paragraph
                                    sx={{ fontSize: '1.2rem', lineHeight: '1.6' }}
                                >
                                    {isRom
                                        ? 'Dacă doriți să ne contactați, vă rugăm să utilizați una dintre următoarele metode de contact:'
                                        : 'If you would like to get in touch with us, please use one of the following contact methods:'}
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
                                    {isRom ? 'Luați legătura' : 'Get in Touch'}
                                </Typography>
                                <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                                    <TextField
                                        required
                                        fullWidth
                                        margin="normal"
                                        label={isRom ? 'Numele dvs. (companie)' : 'Your (Company) Name'}
                                        variant="outlined"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        error={!!errors.name}
                                        helperText={errors.name}
                                    />
                                    <TextField
                                        required
                                        fullWidth
                                        margin="normal"
                                        label={isRom ? 'E-mailul dvs' : 'Your Email'}
                                        variant="outlined"
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        error={!!errors.email}
                                        helperText={errors.email}
                                    />
                                    <TextField
                                        fullWidth
                                        margin="normal"
                                        label={isRom ? 'Subiect' : 'Subject'}
                                        variant="outlined"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                    />
                                    <TextField
                                        required
                                        fullWidth
                                        margin="normal"
                                        label={isRom ? 'Mesajul dvs' : 'Your Message'}
                                        variant="outlined"
                                        multiline
                                        rows={8}
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        error={!!errors.message}
                                        helperText={errors.message}
                                    />
                                    <Box display="flex" justifyContent="center" alignItems="center">
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            type="submit"
                                            sx={{ marginTop: '16px' }}
                                        >
                                            {isRom ? 'Trimite' : 'Send'}
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