import {Box} from "@mui/material";
import Typography from "@mui/material/Typography";
import {CustomImageList} from "../CustomImageList/index.jsx";
import * as React from "react";
import Container from "@mui/material/Container";
import cncImage from '../../assets/homepage/1_cnc_machining.png';
import TDprinting from '../../assets/homepage/2_3d_printing.png';
import injection from '../../assets/homepage/3_injection of plastic part.png';
import laserEng from '../../assets/homepage/4_laser_engraving.png';
import welding from '../../assets/homepage/5_welding.png';
import pneumHidr from '../../assets/homepage/6_pneumatic&hydraulic.png';
import {useLanguage} from '../../configs/LanguageProvider.jsx';

export const ThreeDPrinting = () => {
    const {isRom, setISRom} = useLanguage();
    return (
        <Box
            sx={{
                minHeight: '100vh',
                backgroundColor: '#f4f4f9',
            }}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '100vh',
                }}
            >
                <Box>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Typography
                            variant="h4"
                            component="h1"
                            gutterBottom
                            sx={{fontWeight: 'bold', color: '#2c3e50', fontSize: {xs: '1.7rem', md: '2.125rem'}, textAlign: 'center', mt: {xs: 18, md: 12},}}
                        >
                            {isRom ? 'IMPRIMARE 3D PE PUDRĂ, RĂȘINA ȘI FILAMENT' : '3D PRINTING ON POWDER, RESIN & FILAMENT'}
                        </Typography>
                    </Box>
                    <CustomImageList itemData={itemData}/>
                    <Container maxWidth="lg" sx={{
                        marginTop: 4,
                    }}>
                        <Typography
                            variant="body1"
                            paragraph
                            sx={{fontSize: {xs: '0.9rem', md: '1.2rem'}, color: '#34495e', lineHeight: '1.6'}}
                        >
                            {isRom ? 'Imprimarea 3D este o tehnologie de fabricație aditivă care creează obiecte tridimensionale prin depunerea strat cu strat a materialului. '
                                : '3D printing is an additive manufacturing technology that creates three-dimensional objects by depositing material layer by layer.'}
                        </Typography>
                        <Typography
                            variant="body1"
                            paragraph
                            sx={{fontSize: {xs: '0.9rem', md: '1.2rem'}, color: '#34495e', lineHeight: '1.6'}}
                        >
                            {isRom ? 'Această tehnologie este utilizată într-o gamă largă de industrii, de la medicală ' +
                                'la construcții, pentru a produce prototipuri rapide și piese personalizate. Datorită flexibilității ' +
                                'și eficienței sale, imprimarea 3D permite inovația și reduce semnificativ costurile și timpul de producție.'
                                : 'This technology is used in a wide range of industries, from medical to construction, ' +
                                'to produce rapid prototypes and custom parts. Due to its flexibility and efficiency, 3D\n' +
                                'printing enables innovation and significantly reduces production costs and time.'}
                        </Typography>
                    </Container>
                </Box>
            </Box>
        </Box>
    );
};

const itemData = [
    {
        img: cncImage,
        title: 'Breakfast',
    },
    {
        img: TDprinting,
        title: 'Burger',
    },
    {
        img: injection,
        title: 'Camera',
    },
    {
        img: laserEng,
        title: 'Coffee',
    },
    {
        img: welding,
        title: 'Hats',
    },
    {
        img: pneumHidr,
        title: 'Honey',
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
    },
    {
        img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        title: 'Basketball',
    },
    {
        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        title: 'Fern',
    },
    {
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        title: 'Mushrooms',
    },
    {
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        title: 'Tomato basil',
    },
    {
        img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        title: 'Sea star',
    },
    {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title: 'Bike',
    },
];