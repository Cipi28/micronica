import { Box, Grid } from '@mui/material';

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
                    sx={{ maxWidth: '90%' }}
                >
                    {/* Row 1 */}
                    <Grid item xs={6} sm={6} md={4} display="flex" justifyContent="center">
                        <PageCard />
                    </Grid>
                    <Grid item xs={6} sm={6} md={4} display="flex" justifyContent="center">
                        <PageCard />
                    </Grid>
                    <Grid item xs={6} sm={6} md={4} display="flex" justifyContent="center">
                        <PageCard />
                    </Grid>
                    {/* Row 2 */}
                    <Grid item xs={6} sm={6} md={4} display="flex" justifyContent="center">
                        <PageCard />
                    </Grid>
                    <Grid item xs={6} sm={6} md={4} display="flex" justifyContent="center">
                        <PageCard />
                    </Grid>
                    <Grid item xs={6} sm={6} md={4} display="flex" justifyContent="center">
                        <PageCard />
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};