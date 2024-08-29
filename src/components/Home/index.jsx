import {Box, Grid} from '@mui/material';

import PageCard from "../PageCard/index.jsx";
import cncImage from '../../assets/homepage/1_cnc_machining.png';
import TDprinting from '../../assets/homepage/2_3d_printing.png';
import injection from '../../assets/homepage/3_injection of plastic part.png';
import laserEng from '../../assets/homepage/4_laser_engraving.png';
import welding from '../../assets/homepage/5_welding.png';
import pneumHidr from '../../assets/homepage/6_pneumatic&hydraulic.png';

export const Home = () => {
    return (
        <>
            <Box
                sx={{
                    // mt: 12,
                    height: '85vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    '@media (max-width:900px)': {ml: 3},
                    '@media (max-width:600px)': {ml: 8},
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
                            image={cncImage}
                            link={'/cnc-machining'}
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={4} display="flex" justifyContent="center">
                        <PageCard
                            title={'3D PRINTING'}
                            image={TDprinting}
                            link={'/3d-printing'}
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={4} display="flex" justifyContent="center">
                        <PageCard
                            title={'INJECTION OF PLASTIC PARTS'}
                            image={injection}
                            link={'/injection-of-plastic-parts'}
                        />
                    </Grid>
                    {/* Row 2 */}
                    <Grid item xs={6} sm={6} md={4} display="flex" justifyContent="center">
                        <PageCard
                            title={'LASER ENGRAVING'}
                            image={laserEng}
                            link={'/laser-engraving'}
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={4} display="flex" justifyContent="center">
                        <PageCard
                            title={'TIG/WIG/MIG/MAG WELDING'}
                            image={welding}
                            link={'/tig-wig-mig-mag-welding'}
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={4} display="flex" justifyContent="center">
                        <PageCard
                            title={'MECHANICAL, PNEUMATIC AND HYDRAULIC DEVICES AND SYSTEMS'}
                            image={pneumHidr}
                            link={'/mechanical-pneumatic-hydraulic-devices-and-systems'}
                        />
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};