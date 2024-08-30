import {useMediaQuery, useTheme} from '@mui/material';
import * as React from "react";
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import cncImage from '../../assets/homepage/1_cnc_machining.png';

const events = [
    {
        year: "2004",
        title: "Humble beginnings",
        description: "In 2004, we laid the foundation of our CNC processing and 3D printing company with a vision to provide cutting-edge manufacturing solutions. Our small team of passionate engineers and technicians started with a handful of CNC machines and a commitment to delivering precision and quality."
    },
    {
        year: "2009",
        title: "Expanding Horizons",
        description: "As the demand for advanced manufacturing grew, so did our capabilities. In 2009, we expanded our facility and invested in state-of-the-art CNC machines and 3D printers. This allowed us to take on more complex projects and serve a wider range of industries, from aerospace to automotive and beyond."
    },
    {
        year: "2014",
        title: "Embracing Innovation",
        description: "In 2014, we embraced innovation and integrated the latest advancements in CNC technology and 3D printing. Our focus on research and development led us to adopt cutting-edge software and automation, enabling us to optimize production processes and reduce turnaround times for our clients."
    },
    {
        year: "2019",
        title: "Industry Leaders Sides",
        description: "By 2019, we had become recognized leaders in the CNC processing and 3D printing industry. Our team's expertise and dedication to excellence garnered us numerous accolades and satisfied clients worldwide. We continued to push the boundaries of what was possible, offering custom solutions that met the unique needs of each project."
    },
    {
        year: "2023",
        title: "Pioneering the Future",
        description: "In 2023, we find ourselves at the forefront of advanced manufacturing. With an expanded facility and an ever-growing fleet of CNC machines and 3D printers, we continue to push the boundaries of innovation. Our commitment to sustainability has led us to explore eco-friendly materials and energy-efficient practices, ensuring that we play our part in building a greener future."
    }
];

export const AboutUs = () => {


    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
                    {/* Left Section: Image */}
                    <Grid item xs={12} md={6}>
                        <Paper elevation={3} sx={{ borderRadius: '10px', overflow: 'hidden' }}>
                            <img src={cncImage} alt="Micronica Team" style={{ width: '100%', height: 'auto' }} />
                        </Paper>
                    </Grid>

                    {/* Right Section: Text */}
                    <Grid item xs={12} md={6}>
                        <Typography
                            variant="h4"
                            component="h1"
                            gutterBottom
                            sx={{ fontWeight: 'bold', color: '#2c3e50' }}
                        >
                            About MICRONICA
                        </Typography>
                        <Typography
                            variant="body1"
                            paragraph
                            sx={{ fontSize: '1.2rem', color: '#34495e', lineHeight: '1.6' }}
                        >
                            The team at Micronica has 20 years of experience in CNC machining and stands for cable
                            manufacturing companies. Through their professionalism and dedication, our team members provide
                            high-quality services tailored to the specific needs of each client. Each project is approached
                            with precision and attention to detail, ensuring results that exceed expectations.
                        </Typography>
                        <Typography
                            variant="body1"
                            paragraph
                            sx={{ fontSize: '1.2rem', color: '#34495e', lineHeight: '1.6' }}
                        >
                            Our employees are well-trained specialists with in-depth knowledge of cutting-edge technologies in
                            the CNC machining and cable stand industry. By working closely with our clients, we manage to
                            offer innovative and efficient solutions that enhance production processes and support the growth
                            of their businesses.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};


// <Timeline position={isMobile ? "right" : "alternate"}>
//     {events.map((event, index) => (
//         <TimelineItem key={index}>
//             {!isMobile && (
//                 <TimelineOppositeContent>
//                     <Typography variant="body2" color="textSecondary">
//                         {event.year}
//                     </Typography>
//                 </TimelineOppositeContent>
//             )}
//             <TimelineSeparator>
//                 <TimelineDot/>
//                 {index < events.length - 1 && <TimelineConnector/>}
//             </TimelineSeparator>
//             <TimelineContent>
//                 <Paper elevation={3} style={{padding: '6px 16px'}}>
//                     {isMobile && (
//                         <Typography variant="body2" color="textSecondary">
//                             {event.year}
//                         </Typography>
//                     )}
//                     <Typography variant="h6" component="h1">
//                         {event.title}
//                     </Typography>
//                     <Typography>{event.description}</Typography>
//                 </Paper>
//             </TimelineContent>
//         </TimelineItem>
//     ))}
// </Timeline>