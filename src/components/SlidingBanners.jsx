import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Box, Typography } from '@mui/material';

function SlidingBanners() {
    const items = [
        {
            name: "Hotel Smart Locks",
            info: "We are committed to providing you with high quality products and services",
            image: "/src/assets/images/banner01.jpg"
        },
        {
            name: "Durable Safe Boxes",
            info: "Scratch-Resistant Powder Coated Finish",
            image: "/src/assets/images/banner2.jpg"
        },
        {
            name: "ORBITA Hotel Minibars",
            info: "Cooling by ammonia",
            image: "/src/assets/images/banner3.jpg"
        }
    ]; 

    return (
        <div style={{ width: '100%', height: 'auto', marginTop: '100px' }}>  {/* Full width container */}
            <Carousel
                style={{ width: '100%', maxWidth: '110%' }}  // Limit max width but make responsive
                indicators={true}   // For easier navigation
                navButtonsAlwaysVisible={true} 
            >
                {
                    items.map((item, i) => <Item key={i} item={item} />)
                }
            </Carousel>
        </div>
    );
}

function Item(props) {
    return (
        <Paper style={{ position: 'relative', width: '100%', height: '500px' }}>  {/* Fixed height for consistency */}
            <img
                src={props.item.image}
                alt={props.item.name}
                style={{ 
                    width: '100%',              // Full width
                    height: '100%',             // Full height to fill the space
                    objectFit: 'cover',         // Ensure the image covers the container without distortion
                    display: 'block',           // Remove bottom space under the image
                }}
            />
            {/* Centered overlay text */}
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',               // Center vertically
                    left: '50%',              // Center horizontally
                    transform: 'translate(-50%, -50%)', // Adjust for the element's own width and height
                    color: '#0b1335',
                    padding: '20px',         // Adjust padding as needed
                    textAlign: 'center',      // Center text inside the Box
                    fontSize: 'bold',
                    fontFamily: 'Montserrat',
                }}
            >
                <Typography variant="h5" sx={{ fontSize: { xs: '1rem', sm: '2rem', md: '3rem', lg: '4rem' } }}> {/* Responsiveness */}
                    {props.item.name}
                </Typography>  
                <Typography sx={{color: 'white', fontSize: { xs: '0.75rem', sm: '1rem', md: '1rem', lg: '1.5rem' }}}>
                    {props.item.info}
                </Typography>
            </Box>
        </Paper>
    );
}

export default SlidingBanners;
