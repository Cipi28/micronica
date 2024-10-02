import * as React from "react";
import {useEffect, useState} from "react";
import {Box, Container, Typography } from '@mui/material';
import {CustomImageList} from "../CustomImageList/index.jsx";
import {useLanguage} from '../../configs/LanguageProvider.jsx';
import ScrollToTopService from "../../services/ScrollToTopService.jsx";
import { imageDb } from '../../FirebaseImageUpload/Config';
import { listAll, ref, getDownloadURL } from 'firebase/storage';

export const DevAndSystems = () => {
    const {isRom, setISRom} = useLanguage();
    const [imgsUrl, setImgsUrl] = useState([]);

    useEffect(() => {
        listAll(ref(imageDb, 'MechPneumHydrDevAndSystems')).then(imgs => {
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
                            {isRom ? 'DISPOZITIVE ȘI SISTEME MECANICE, PNEUMATICE ȘI HIDRAULICE' : 'MECHANICAL, PNEUMATIC AND HYDRAULIC DEVICES AND SYSTEMS'}
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
                            {isRom ? 'Dispozitivele și sistemele mecanice folosesc componente fizice, cum ar fi roți dințate, pârghii și fulii, pentru ' +
                                'a transmite forță și mișcare, fiind esențiale în mașinile industriale și echipamentele de producție. '
                                : 'Mechanical devices and systems use physical components like gears, levers, and pulleys to transmit force and motion, ' +
                                'being essential in industrial machines and production equipment.'}
                        </Typography>
                        <Typography
                            variant="body1"
                            paragraph
                            sx={{fontSize: {xs: '0.9rem', md: '1.2rem'}, color: '#34495e', lineHeight: '1.6'}}
                        >
                            {isRom ? 'Sistemele pneumatice utilizează aer comprimat pentru a alimenta cilindri și actuatori, oferind soluții rapide și eficiente ' +
                                'pentru automatizare și control. Sistemele hidraulice folosesc lichid sub presiune pentru a genera forță și mișcare, fiind folosite ' +
                                'în echipamente grele, cum ar fi excavatoarele și prese hidraulice, datorită capacității lor de a manipula sarcini mari cu precizie.'
                                : 'Pneumatic systems utilize compressed air to power cylinders and actuators, providing quick and efficient solutions for automation and control.\n' +
                                'Hydraulic systems use pressurized fluid to generate force and motion, employed in heavy equipment such as excavators ' +
                                'and hydraulic presses due to their ability to handle large loads with precision.'}
                        </Typography>
                    </Container>
                </Box>
            </Box>
        </Box>
    );
};
