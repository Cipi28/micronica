import * as React from "react";
import {CustomImageList} from "../CustomImageList/index.jsx";
import { Container, Typography, Box } from "@mui/material";
import {useLanguage} from '../../configs/LanguageProvider.jsx';
import ScrollToTopService from "../../services/ScrollToTopService.jsx";
import { imageDb } from '../../FirebaseImageUpload/Config';
import { listAll, ref, getDownloadURL } from 'firebase/storage';
import {useEffect, useState} from "react";

export const LaserEngraving = () => {
    const {isRom, setISRom} = useLanguage();
    const [imgsUrl, setImgsUrl] = useState([]);

    useEffect(() => {
        listAll(ref(imageDb, 'LaserEngraving')).then(imgs => {
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
                            {isRom ? 'GRAVARE LASER' : 'LASER ENGRAVING'}
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
                            {isRom ? 'Gravarea cu laser este un proces de marcare precisă în care un fascicul laser este utilizat ' +
                                'pentru a îndepărta straturi de material de pe suprafața unui obiect. '
                                : 'Laser engraving is a precise marking process where a laser beam is used to remove layers of material from the surface of an object.'}
                        </Typography>
                        <Typography
                            variant="body1"
                            paragraph
                            sx={{fontSize: {xs: '0.9rem', md: '1.2rem'}, color: '#34495e', lineHeight: '1.6'}}
                        >
                            {isRom ? 'Această tehnologie este folosită pe scară largă în industrii precum cea de bijuterii, electronică și publicitate pentru personalizarea și decorarea ' +
                                'produselor. Datorită preciziei și flexibilității sale, gravarea cu laser permite crearea de modele detaliate și durabile pe o varietate de materiale.'
                                : 'This technology is widely used in industries such as jewelry, electronics, and advertising for personalizing and decorating products.\n' +
                                ' Due to its precision and flexibility, laser engraving allows for the creation of detailed and durable designs on a variety of materials.'}
                        </Typography>
                    </Container>
                </Box>
            </Box>
        </Box>
    );
};