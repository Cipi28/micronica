import * as React from "react";
import {
    Box,
    Dialog,
    DialogContent,
    ImageList,
    ImageListItem,
    useMediaQuery,
    useTheme,
    IconButton
} from "@mui/material";
import {useState} from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const CustomImageList = ({itemData}) => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));

    const getColumns = () => {
        if (isSmallScreen) return 2;
        if (isMediumScreen) return 3;
        return 6;
    };

    const [open, setOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    const handleClickOpen = (index) => {
        setSelectedImageIndex(index);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedImageIndex(null);
    };

    const handleNext = () => {
        setSelectedImageIndex((prevIndex) =>
            prevIndex === itemData.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrevious = () => {
        setSelectedImageIndex((prevIndex) =>
            prevIndex === 0 ? itemData.length - 1 : prevIndex - 1
        );
    };

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    mt: {xs: 8, md: 0}
                }}
            >
                <ImageList
                    sx={{
                        width: '90%',
                        height: "28rem",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        borderRadius: '10px',
                        borderMargin: '5px',
                        borderColor: 'black',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                        p: 2,
                        overflowY: 'auto',
                        backgroundColor: '#ffffff',
                        '@media (max-width:600px)': {
                            height: "25rem",
                        },
                    }}
                    cols={getColumns()}
                    variant="woven"
                    gap={8}
                >
                    {itemData.map((item, index) => (
                        <ImageListItem key={item.img} onClick={() => handleClickOpen(index)}>
                            <img
                                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                alt={item.title}
                                // loading="lazy"
                                style={{cursor: 'pointer'}}
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>

            {selectedImageIndex !== null && (
                <Dialog open={open} onClose={handleClose}
                >
                    <Box sx={{position: 'relative', display: 'flex', alignItems: 'center'}}>
                        <IconButton
                            // onClick={handlePrevious}
                            sx={{
                                position: 'absolute',
                                left: '2px',
                                zIndex: 1000,
                                backgroundColor: 'rgba(0,0,0,0.5)',
                                color: 'white',
                                width: {
                                    xs: '30px',
                                    md: '50px',
                                },
                                height: {
                                    xs: '30px',
                                    md: '50px',
                                },
                            }}
                        >
                            <ArrowBackIosIcon sx={{
                                fontSize: {
                                    xs: '1.5rem',
                                    md: '2rem',
                                },
                                paddingLeft: '7px',
                            }}/>
                        </IconButton>

                        <DialogContent sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <img
                                src={itemData[selectedImageIndex].img}
                                alt="Selected"
                                style={{width: '90%', height: 'auto'}}
                            />
                        </DialogContent>

                        <IconButton
                            onClick={handleNext}
                            sx={{
                                position: 'absolute',
                                right: '2px',
                                zIndex: 1000,
                                backgroundColor: 'rgba(0,0,0,0.5)',
                                color: 'white',
                                width: {
                                    xs: '30px',
                                    md: '50px',
                                },
                                height: {
                                    xs: '30px',
                                    md: '50px',
                                },
                            }}
                        >
                            <ArrowForwardIosIcon sx={{
                                fontSize: {
                                    xs: '1.5rem',
                                    md: '2rem',
                                },
                                paddingLeft: '7px',
                            }}/>
                        </IconButton>
                    </Box>
                </Dialog>
            )}
        </>
    );
};
