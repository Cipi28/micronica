import {Box, Dialog, DialogContent, ImageList, ImageListItem, useMediaQuery, useTheme} from "@mui/material";
import {useState} from "react";
import Typography from "@mui/material/Typography";
import * as React from "react";

export const CustomImageList = ({itemData}) => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));

    const getColumns = () => {
        if (isSmallScreen) return 1;
        if (isMediumScreen) return 2;
        return 3;
    };

    const [open, setOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const handleClickOpen = (img) => {
        setSelectedImage(img);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedImage('');
    };

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <ImageList
                    sx={{
                        width: '70%',
                        height: 600,
                        boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.2)', // Depth shadow
                        p: 2, // Optional padding to prevent shadow clipping
                        overflowY: 'auto',
                    }}
                    cols={getColumns()}
                    variant="woven"
                    gap={8}
                >
                    {itemData.map((item) => (
                        <ImageListItem key={item.img} onClick={() => handleClickOpen(item.img)}>
                            <img
                                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                alt={item.title}
                                loading="lazy"
                                style={{cursor: 'pointer'}}
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>
            <Dialog open={open} onClose={handleClose} maxWidth="lg">
                <DialogContent>
                    <img src={selectedImage} alt="Selected" style={{width: '100%', height: 'auto'}}/>
                </DialogContent>
            </Dialog>
        </>
    );
};