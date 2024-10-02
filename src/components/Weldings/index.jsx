import * as React from "react";
import {useEffect, useState} from "react";
import {Box, Typography, Container} from '@mui/material';
import {CustomImageList} from "../CustomImageList/index.jsx";
import {useLanguage} from '../../configs/LanguageProvider.jsx';
import ScrollToTopService from "../../services/ScrollToTopService.jsx";
import { imageDb } from '../../FirebaseImageUpload/Config';
import { listAll, ref, getDownloadURL } from 'firebase/storage';

export const Weldings = () => {
    const {isRom, setISRom} = useLanguage();
    const [imgsUrl, setImgsUrl] = useState([]);

    useEffect(() => {
        listAll(ref(imageDb, 'TigWigMigMagWelding')).then(imgs => {
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
                            {isRom ? 'SUDURĂ TIG/WIG/MIG/MAG' : 'TIG/WIG/MIG/MAG WELDING'}
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
                            {isRom ? 'Sudura TIG (Tungsten Inert Gas) și WIG (Wolfram Inert Gas) implică utilizarea unui electrod de tungsten pentru ' +
                                'a produce suduri de înaltă calitate, fiind ideală pentru materiale subțiri și delicate. '
                                : 'TIG (Tungsten Inert Gas) and WIG (Wolfram Inert Gas) welding involve the use of a tungsten electrode to produce ' +
                                'high-quality welds, making them ideal for thin and delicate materials.'}
                        </Typography>
                        <Typography
                            variant="body1"
                            paragraph
                            sx={{fontSize: {xs: '0.9rem', md: '1.2rem'}, color: '#34495e', lineHeight: '1.6'}}
                        >
                            {isRom ? 'Sudura MIG (Metal Inert Gas) și MAG (Metal Active Gas) utilizează un fir de alimentare continuă și un gaz de ' +
                                'protecție pentru a crea suduri rapide și eficiente, fiind folosită în aplicații industriale. Datorită versatilității ' +
                                'și eficienței lor, aceste tehnici de sudură sunt esențiale în diverse industrii, inclusiv construcții, automotive și aerospațiale.'
                                : 'MIG (Metal Inert Gas) and MAG (Metal Active Gas) welding use a continuously fed wire and a shielding gas to create ' +
                                'fast and efficient welds, commonly used in industrial applications.\n' +
                                'Due to their versatility and efficiency, these welding techniques are essential in various industries, including construction, automotive, and aerospace.'}
                        </Typography>
                    </Container>
                </Box>
            </Box>
        </Box>
    );
};