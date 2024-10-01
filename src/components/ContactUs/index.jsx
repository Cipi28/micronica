import * as React from "react";
import {useState} from "react";
import {Box, Container, Typography, Grid, Paper, TextField, Button, IconButton} from '@mui/material';
import {Email, Phone, Room} from "@mui/icons-material";
import {useLanguage} from '../../configs/LanguageProvider.jsx';
import emailjs from 'emailjs-com';
import ScrollToTopService from "../../services/ScrollToTopService.jsx";

const DEFAULT_SUBJECT = "Email trimis de pe site-ul MICRONICA";

export const ContactUs = () => {
    const {isRom, setISRom} = useLanguage();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [errors, setErrors] = useState({});

    const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const EMAIL_JS_USER_ID = '_oITw2nA-QrpG8wQH';
    const EMAIL_JS_SERVICE_ID = 'service_up4yv27';
    const EMAIL_JS_TEMPLATE_ID = 'template_62b1vj9';

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
        } else if (!EMAIL_REGEX.test(formData.email)) {
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
            if (sentData.subject === '') {
                sentData.subject = DEFAULT_SUBJECT;
            }
            emailjs.init(EMAIL_JS_USER_ID);

            emailjs.send(
                EMAIL_JS_SERVICE_ID,
                EMAIL_JS_TEMPLATE_ID,
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
                minHeight: '80vh',
                py: 10,
                mt: {xs: 2, md: 10}
            }}
        >
            <ScrollToTopService/>
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
                            <Typography
                                variant="h4"
                                component="h1"
                                gutterBottom
                                sx={{fontWeight: 'bold', textAlign: 'center'}}
                            >
                                {isRom ? 'Contacte' : 'Contacts'}
                            </Typography>
                            <Typography
                                variant="body1"
                                paragraph
                                sx={{fontSize: '1.2rem', lineHeight: '1.6'}}
                            >
                                {isRom
                                    ? 'Suntem bucuroși să vă răspundem la întrebări, să discutăm despre proiectele pe care le aveți în vedere sau să vă oferim orice alte informații de care aveți nevoie.'
                                    : 'We are happy to answer your questions, discuss projects you have in mind, or provide you with any other information you need.'}
                            </Typography>
                            <Typography
                                variant="body1"
                                paragraph
                                sx={{fontSize: '1.2rem', lineHeight: '1.6'}}
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
                                    transition: 'background-color 0.3s ease, color 0.3s ease',
                                    '&:hover': {
                                        color: '#0080FF',
                                    },
                                }}>
                                    <Email fontSize="inherit"/>
                                </IconButton>
                                <IconButton color="inherit" sx={{
                                    fontSize: 35,
                                    transition: 'background-color 0.3s ease, color 0.3s ease',
                                    '&:hover': {
                                        color: '#0080FF',
                                    },
                                }}>
                                    <Room fontSize="inherit"/>
                                </IconButton>
                                <IconButton color="inherit" sx={{
                                    fontSize: 35,
                                    transition: 'background-color 0.3s ease, color 0.3s ease',
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
                        <Paper elevation={3} sx={{padding: '20px', borderRadius: '10px'}}>
                            <Typography variant="h6" component="h2">
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
                                    sx={{
                                        height: '60px',
                                    }}
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
                                    sx={{
                                        height: '60px',
                                    }}
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
                                    rows={6}
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
                                        sx={{marginTop: '16px'}}
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