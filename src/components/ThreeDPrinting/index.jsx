import * as React from "react";
import {useEffect, useState} from "react";
import {Box, Typography, Container } from "@mui/material";
import {CustomImageList} from "../CustomImageList/index.jsx";
import {useLanguage} from '../../configs/LanguageProvider.jsx';
import ScrollToTopService from "../../services/ScrollToTopService.jsx";
import { imageDb } from '../../FirebaseImageUpload/Config';
import { listAll, ref, getDownloadURL } from 'firebase/storage';

export const ThreeDPrinting = () => {
    const {isRom, setISRom} = useLanguage();
    const [imgsUrl, setImgsUrl] = useState([]);

    useEffect(() => {
        listAll(ref(imageDb, '3DPrinting')).then(imgs => {
            imgs.items.forEach(val=>{
                getDownloadURL(val).then(url=>{
                    setImgsUrl(data=>[...data,url])
                })
            })
        })
    }, []);

    return (
        <Box
            sx={{
                minHeight: '80vh',
            }}>
            <ScrollToTopService/>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '78vh',
                    mt: 10
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
                            sx={{fontWeight: 'bold', color: '#2c3e50', fontSize: {xs: '1.7rem', md: '2.125rem'}, textAlign: 'center', mt: 7, display: {xs: 'none', md: 'flex'} }}
                        >
                            {isRom ? 'IMPRIMARE 3D PE PULBERE, RĂȘINA ȘI FILAMENT' : '3D PRINTING ON POWDER, RESIN & FILAMENT'}
                        </Typography>
                    </Box>
                    <CustomImageList itemData={imgsUrl}/>
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