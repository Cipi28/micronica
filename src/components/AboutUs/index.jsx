import {Box, Divider, List, ListItem, Paper} from "@mui/material";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent} from '@mui/lab';
import {useMediaQuery, useTheme} from '@mui/material';
import * as React from "react";

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
                mt: 14,
                mb: 10,
            }}
        >
            <Container maxWidth="lg">
                <Typography variant="h4" component="h1" gutterBottom>
                    About MICRONICA
                </Typography>
                <Typography variant="body1" paragraph>
                    <strong>CNC (Computer Numerical Control)</strong> machining is a method of manufacturing and processing materials that uses numerically controlled machines to perform cutting,
                    milling, turning, or drilling operations in a precise and efficient manner.
                </Typography>
                <Typography variant="body1" paragraph>
                    Our CNC machining company offers specialized services in metal and plastics machining using advanced CNC technology. We have a team of skilled professionals and a wide range of
                    state-of-the-art CNC machinery, allowing us to produce complex, detailed, and high-precision parts.
                </Typography>
                <Typography variant="body1" paragraph>
                    Using specialised software, we program CNC machines to perform the necessary machining operations based on 2D or 3D CAD models. This enables us to produce parts with precise
                    dimensions and shapes, according to our customers' specifications and requirements.
                </Typography>
                <Typography
                    variant="h6"
                    component="h2"
                    gutterBottom
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        mt: 4,
                    }}
                >
                    <strong>The benefits of CNC machining include:</strong>
                </Typography>
                <List sx={{
                    listStyleType: 'disc',
                    pl: 2,
                    '& .MuiListItem-root': {
                        display: 'list-item',
                    },
                }}>
                    <ListItem sx={{display: 'list-item', textAlign: 'left', pl: 0}}>
                        <Typography variant="body1">
                            Accuracy and consistency: CNC machines are capable of reproducing the exact same machining operation multiple times, ensuring consistent quality and high accuracy of
                            manufactured parts.
                        </Typography>
                    </ListItem>
                    <ListItem sx={{display: 'list-item', textAlign: 'left', pl: 0}}>
                        <Typography variant="body1">
                            Efficiency and speed: CNC machine programming enables fast execution of machining operations, reducing the time required for manufacturing and delivery.
                        </Typography>
                    </ListItem>
                    <ListItem sx={{display: 'list-item', textAlign: 'left', pl: 0}}>
                        <Typography variant="body1">
                            Flexibility and versatility: CNC technology allows us to work with a wide range of materials, including metals, plastics, wood, or composites. We can also produce a variety
                            of shapes and sizes, adapting to your needs and requirements.
                        </Typography>
                    </ListItem>
                </List>
                <Typography variant="h4" component="h1" gutterBottom sx={{mt: 4}}>
                    OUR EXPERIENCE
                </Typography>
                <Divider sx={{mb: 3}}/>
                {!isMobile ? (
                    <Timeline position={isMobile ? "right" : "alternate"}>
                        {events.map((event, index) => (
                            <TimelineItem key={index}>
                                <TimelineOppositeContent>
                                    <Typography variant="body2" color="textSecondary">
                                        {event.year}
                                    </Typography>
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot/>
                                    {index < events.length - 1 && <TimelineConnector/>}
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Paper elevation={3} style={{padding: '6px 16px'}}>
                                        {/*<Typography variant="body2" color="textSecondary">*/}
                                        {/*    {event.year}*/}
                                        {/*</Typography>*/}
                                        <Typography variant="h6" component="h1">
                                            {event.title}
                                        </Typography>
                                        <Typography>{event.description}</Typography>
                                    </Paper>
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                    </Timeline>
                ) : (
                    <Timeline position={isMobile ? "right" : "alternate"}>
                        {events.map((event, index) => (
                            <TimelineItem key={index}>
                                <Box display="flex" flexDirection="column" alignItems="flex-start" width="100%">
                                    <TimelineSeparator>
                                        <TimelineDot/>
                                        {index < events.length - 1 && <TimelineConnector/>}
                                    </TimelineSeparator>
                                    <Paper elevation={3} style={{padding: '6px 16px', marginTop: 8, marginBottom: 8, width: '100%'}}>
                                        <Typography variant="body2" color="textSecondary">
                                            {event.year}
                                        </Typography>
                                        <Typography variant="h6" component="h1">
                                            {event.title}
                                        </Typography>
                                        <Typography>{event.description}</Typography>
                                    </Paper>
                                </Box>
                            </TimelineItem>
                        ))}
                    </Timeline>
                )}
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