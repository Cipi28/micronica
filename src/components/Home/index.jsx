import {Box, Grid} from '@mui/material';

import PageCard from "../PageCard/index.jsx";

export const Home = () => {
    return (
        <>
            <Box
                sx={{
                    mt: 10,
                    // px: 2,
                    minHeight: '90vh', // Set the Box to take the full viewport height
                    display: 'flex',
                    alignItems: 'center', // Center vertically
                    justifyContent: 'center', // Center horizontally
                }}
            >
                <Grid
                    container
                    spacing={2} // Fixed gap between cards
                    justifyContent="center"
                    sx={{maxWidth: '90%'}}
                >
                    {/* Row 1 */}
                    <Grid item xs={6} sm={6} md={4} display="flex" justifyContent="center">
                        <PageCard title={'CNC MACHINING'} image={'https://micronica.webtm.ro/wp-content/uploads/2023/07/prelucrare-cnc-scaled.jpg'}/>
                    </Grid>
                    <Grid item xs={6} sm={6} md={4} display="flex" justifyContent="center">
                        <PageCard title={'3D PRINTING'} image={'https://micronica.webtm.ro/wp-content/uploads/2023/07/3D.jpg'}/>
                    </Grid>
                    <Grid item xs={6} sm={6} md={4} display="flex" justifyContent="center">
                        <PageCard title={'INJECTION OF PLASTIC PARTS'} image={'https://micronica.webtm.ro/wp-content/uploads/2023/07/micronica-plastic-injection-2.jpg'}/>
                    </Grid>
                    {/* Row 2 */}
                    <Grid item xs={6} sm={6} md={4} display="flex" justifyContent="center">
                        <PageCard title={'LASER ENGRAVING'}
                                  image={'https://micronica.webtm.ro/wp-content/uploads/2023/03/cnc-laser-cutting-of-metal-modern-industrial-tech-2021-08-26-23-00-56-utc-1.jpg'}/>
                    </Grid>
                    <Grid item xs={6} sm={6} md={4} display="flex" justifyContent="center">
                        <PageCard title={'TIG/WIG/MIG/MAG WELDING'} image={'https://micronica.webtm.ro/wp-content/uploads/2023/03/tig-welding-professional-at-work-2023-02-22-18-55-29-utc-1.jpg'}/>
                    </Grid>
                    <Grid item xs={6} sm={6} md={4} display="flex" justifyContent="center">
                        <PageCard title={'MECHANICAL, PNEUMATIC AND HYDRAULIC DEVICES AND SYSTEMS'} image={'https://micronica.webtm.ro/wp-content/uploads/2023/07/prelucrare-cnc-scaled.jpg'}/>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};