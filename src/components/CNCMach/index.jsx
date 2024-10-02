import * as React from "react";
import {useEffect, useState} from "react";
import { Typography, Container, Box } from "@mui/material";
import {CustomImageList} from "../CustomImageList/index.jsx";
import {useLanguage} from '../../configs/LanguageProvider.jsx';
import ScrollToTopService from "../../services/ScrollToTopService.jsx";
import { imageDb } from '../../FirebaseImageUpload/Config';
import { listAll, ref, getDownloadURL } from 'firebase/storage';

export const CNCMach = () => {
    const {isRom, setISRom} = useLanguage();
    const [imgsUrl, setImgsUrl] = useState([]);

    useEffect(() => {
        listAll(ref(imageDb, 'CNCMachining')).then(imgs => {
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
                            {isRom ? 'PRELUCRARE CNC' : 'CNC MACHINING'}
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
                            {isRom ? 'Prelucrarea CNC (Computer Numerical Control) este un proces de fabricație care folosește computere pentru a controla unelte și mașini. '
                                : 'CNC (Computer Numerical Control) machining is a manufacturing process that uses computers to control tools and machines.'}
                        </Typography>
                        <Typography
                            variant="body1"
                            paragraph
                            sx={{fontSize: {xs: '0.9rem', md: '1.2rem'}, color: '#34495e', lineHeight: '1.6'}}
                        >
                            {isRom ? 'Acest tip de prelucrare permite producerea de componente complexe și precise, utilizate într-o ' +
                                'varietate de industrii, de la aerospațială la automotive. Datorită automatizării și preciziei sale, ' +
                                'prelucrarea CNC reduce semnificativ timpul și costurile de producție.'
                                : 'This type of machining allows for the production of complex and precise components ' +
                                'used in a variety of industries, from aerospace to automotive.\n' +
                                'Due to its automation and accuracy, CNC machining significantly reduces production time and costs.'}
                        </Typography>
                    </Container>
                </Box>
            </Box>
        </Box>
    );
};