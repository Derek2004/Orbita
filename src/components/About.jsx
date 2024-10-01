import React from 'react';
import { Box, Typography, Button } from '@mui/material';

function AboutSection() {
  return (
    <Box 
      sx={{
        position: 'relative',        // For positioning the background
        display: 'flex',             // Flexbox layout
        flexDirection: { xs: 'column', md: 'row-reverse' },  // Stack vertically on small screens, reverse side by side on larger
        alignItems: 'center',        // Center items vertically
        padding: '20px',
        marginTop: '50px',
        backgroundColor: 'rgba(255, 255, 255, 0.9)', // Slight transparent white background for text readability
        zIndex: 1,                   // Ensure the content is above the background image
        overflow: 'hidden',          // Hide any overflowing content
      }}
    >
      {/* Background image with blur */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url(/src/assets/images/chinaoffice.jpg)',  
          backgroundSize: 'cover',       // Cover the entire background area
          backgroundPosition: 'center',
          filter: 'blur(3px)',          // Blur effect
          zIndex: -1,                    // Place the background behind the content
          opacity: 0.7,                  // Slight transparency for the background
        }}
      />

      {/* Image on the right */}
      <Box 
        sx={{ 
          width: { xs: '100%', md: '50%' },  // Full width on small screens, 50% on larger
          marginBottom: { xs: '20px', md: '0' },  // Margin at the bottom for small screens
          textAlign: 'center',  // Center the image on smaller screens
        }}
      >
        <img
          src="/src/assets/images/about.jpg"
          alt="About Us"
          style={{ 
            width: '100%',            // Full width on larger screens
            height: 'auto',           // Maintain aspect ratio
            borderRadius: '8px',      // Optional: add rounded corners
          }}
        />
      </Box>

      {/* Text on the left */}
      <Box 
        sx={{ 
          width: { xs: '100%', md: '50%' },  // Full width on small screens, 50% on larger
          paddingRight: { md: '20px' },       // Padding right for larger screens
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            color: '#333',
            marginBottom: '20px',
            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },  // Responsive font size
          }}
        >
          About Orbita
        </Typography>

        {/* First text section */}
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem' },  // Responsive font size
            lineHeight: '1.6',
            color: '#555',
            marginBottom: '20px',
            textAlign: 'justify',   // Justified alignment
          }}
        >
          At Orbita Kenya, we are dedicated to providing innovative and high-quality products for the hospitality industry.
          Our team focuses on delivering solutions that enhance comfort, security, and convenience for hotel guests and staff alike.
          With years of expertise, we aim to bring cutting-edge technology and reliability to our clients, ensuring exceptional service and satisfaction.
          Our products are designed with your needs in mind, blending functionality with elegance.
        </Typography>

        {/* Second text section */}
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem' },  // Responsive font size
            lineHeight: '1.6',
            color: '#555',
            textAlign: 'justify',   // Justified alignment
          }}
        >
          We take pride in being the exclusive distributor of Orbita, a renowned hospitality products manufacturer with 
          a 46,000 square meters ISO certified garden factory based in China. With a commitment to delivering excellence, Orbita has established 
          itself as a leading provider of high-quality products and professional services to customers worldwide<a href='3'> Contact us</a> for more info.
        </Typography>
        <Button variant="contained" sx={{backgroundColor: 'burlywood'}}>
              <a>Read More</a>
            </Button>
      </Box>
    </Box>
  );
}

export default AboutSection;
