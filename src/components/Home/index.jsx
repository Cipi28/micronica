import {Box, Grid} from '@mui/material';

import PageCard from "../PageCard/index.jsx";

export const Home = () => {
    return (
        <>
            <Box
                sx={{
                    mt: 12,
                    height: '85vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Grid
                    container
                    spacing={2} // Fixed gap between cards
                    justifyContent="center"
                    sx={{
                        '@media (min-width:600px)': {
                            maxWidth: '80%',
                        },
                        maxWidth: '95%',
                    }}
                >
                    {/* Row 1 */}
                    <Grid item xs={6} sm={6} md={4} display="flex" justifyContent="center">
                        <PageCard
                            title={'CNC MACHINING'}
                            image={'https://micronica.webtm.ro/wp-content/uploads/2023/07/prelucrare-cnc-scaled.jpg'}
                            link={'/cnc-machining'}
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={4} display="flex" justifyContent="center">
                        <PageCard
                            title={'3D PRINTING'}
                            image={'https://micronica.webtm.ro/wp-content/uploads/2023/07/3D.jpg'}
                            link={'/3d-printing'}
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={4} display="flex" justifyContent="center">
                        <PageCard
                            title={'INJECTION OF PLASTIC PARTS'}
                            image={'https://micronica.webtm.ro/wp-content/uploads/2023/07/micronica-plastic-injection-2.jpg'}
                            link={'/injection-of-plastic-parts'}
                        />
                    </Grid>
                    {/* Row 2 */}
                    <Grid item xs={6} sm={6} md={4} display="flex" justifyContent="center">
                        <PageCard
                            title={'LASER ENGRAVING'}
                            image={'https://micronica.webtm.ro/wp-content/uploads/2023/03/cnc-laser-cutting-of-metal-modern-industrial-tech-2021-08-26-23-00-56-utc-1.jpg'}
                            link={'/laser-engraving'}
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={4} display="flex" justifyContent="center">
                        <PageCard
                            title={'TIG/WIG/MIG/MAG WELDING'}
                            image={'https://micronica.webtm.ro/wp-content/uploads/2023/03/tig-welding-professional-at-work-2023-02-22-18-55-29-utc-1.jpg'}
                            link={'/tig-wig-mig-mag-welding'}
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={4} display="flex" justifyContent="center">
                        <PageCard
                            title={'MECHANICAL, PNEUMATIC AND HYDRAULIC DEVICES AND SYSTEMS'}
                            image={'https://micronica.webtm.ro/wp-content/uploads/2023/07/prelucrare-cnc-scaled.jpg'}
                            link={'/mechanical-pneumatic-hydraulic-devices-and-systems'}
                        />
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};