import * as React from "react";
import {useEffect, useState} from "react";
import {Box, Typography, Container} from '@mui/material';
import {CustomImageList} from "../CustomImageList/index.jsx";
import {useLanguage} from '../../configs/LanguageProvider.jsx';
import ScrollToTopService from "../../services/ScrollToTopService.jsx";
import { imageDb } from '../../FirebaseImageUpload/Config';
import { listAll, ref, getDownloadURL } from 'firebase/storage';

export const InjectionPlastic = () => {
    const {isRom, setISRom} = useLanguage();
    const [imgsUrl, setImgsUrl] = useState([]);

    useEffect(() => {
        listAll(ref(imageDb, 'InjectionOfPlastic')).then(imgs => {
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
                            {isRom ? 'INJECTIE MASE PLASTICE' : 'INJECTION OF PLASTIC PARTS'}
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
                            {isRom ? 'Injecția de piese din plastic este un proces de fabricație în care materialul plastic topit ' +
                                'este injectat într-un tipar pentru a produce componente de diferite forme și dimensiuni. '
                                : 'Injection molding of plastic parts is a manufacturing process in which melted plastic material ' +
                                'is injected into a mold to produce components of various shapes and sizes.'}
                        </Typography>
                        <Typography
                            variant="body1"
                            paragraph
                            sx={{fontSize: {xs: '0.9rem', md: '1.2rem'}, color: '#34495e', lineHeight: '1.6'}}
                        >
                            {isRom ? 'Această metodă este utilizată pe scară largă în industrii precum cea automotive, electronică și ambalaje ' +
                                'datorită capacității sale de a produce rapid și eficient piese de calitate. Datorită versatilității sale, ' +
                                'injecția de piese din plastic permite fabricarea unor produse complexe și precise la costuri reduse.'
                                : 'This method is widely used in industries such as automotive, electronics, and packaging ' +
                                'due to its ability to quickly and efficiently produce high-quality parts.\n' +
                                'Due to its versatility, plastic injection molding enables the manufacturing of complex and precise products at reduced costs.'}
                        </Typography>
                    </Container>
                </Box>
            </Box>
        </Box>
    );
};