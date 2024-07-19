import {Box, Divider, List, ListItem, Paper, TextField, useMediaQuery, useTheme} from "@mui/material";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import {Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator} from "@mui/lab";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

export const ContactUs = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                mt: 14,
                mb: 10,
            }}
        >
            <Container maxWidth="lg">
                <Typography variant="h4" component="h1" gutterBottom>
                    Contact Us
                </Typography>
                <Typography variant="body1" paragraph>
                    We are happy to answer your questions, discuss projects you have in mind or provide you with any other information you need. We look forward to working with you and providing you
                    with high quality CNC machining solutions.
                </Typography>
                <Typography variant="body1" paragraph>
                    If you would like to get in touch with us, please use the following contact information:
                </Typography>
                <Box display="flex" justifyContent="center" alignItems="center">
                    <Card elevation={6} style={{maxWidth: '600px', width: '100%', marginTop: 40}}>
                        <CardContent>
                            <Typography variant="h5" component="h2" gutterBottom>
                                Contact Us
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
                                        style={{marginTop: '16px'}}
                                    >
                                        Send
                                    </Button>
                                </Box>
                            </form>
                        </CardContent>
                    </Card>
                </Box>
            </Container>
        </Box>
    );
};