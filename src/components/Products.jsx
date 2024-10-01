import React from 'react';
import { Box, Typography, Card, CardMedia, CardContent, CardActions, Button } from '@mui/material';

function Products() {
  const products = [
    { name: 'Hotel Smart Lock', info: 'E3041 ORBITA Hotel RFID Lock', image: '/src/assets/images/Product1.jpg' }, 
    { name: 'Hotel Phone', info:'OBT-1009 ORBITA Hotel Phone', image: '/src/assets/images/hotelphone.jpg' },
    { name: 'S3474 ORBITA Hotel RFID Lock', info:'Split Design Style', image: '/src/assets/images/Product3.jpg' },
    { name: 'HD-01B Hotel Wall Mounted Hair Dryer', info: 'Wall Mounted Hair Dryer', image: '/src/assets/images/Product4.jpg' },
    { name: 'OBT-2043MB Hotel Room Safe', info:'3mm Cold-Rolled Steel Door', image: '/src/assets/images/Product5.jpg' },
    { name: 'Hotel Kettle & Tray', info: 'High Quality and Durable', image: '/src/assets/images/Product6.jpg' },
    { name: 'Hotel Minibar OBT-40DX', info: 'Cool Quiet High performance with superior', image: '/src/assets/images/minibar.jpg' }
  ];

  return (
    <Box 
      sx={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
        gap: '20px', 
        padding: '20px',
        marginTop: '50px',
        backgroundColor: 'whitesmoke'
      }}
    >
      <Typography variant="h4" style={{color: '#555', 
        display: 'flex', 
        alignItems: 'flex-start', 
        fontWeight: 'bold'}} 
        sx={{ 
          gridColumn: '1 / -1', 
          textAlign: 'center', 
          marginBottom: '20px' 
          }}>
        Latest Products
      </Typography>
      <Typography sx={{color: 'gray'}}>
        We provide professional smart hotel and <a href="#" style={{color: 'burlywood'}}>Smart home solutions</a>
        <ul>
          <li>
          <a href="">Hotel RFID Locks</a>
          </li>
          <li>
            <a href="">Home Smart Locks</a>
            </li>
          <li>
            <a href="">Hotel SafeBoxes</a>
            </li>
          <li>
            <a href="">Hotel Phones</a>
            </li>
          <li>
            <a href="">Hotel Hairdryers</a>
          </li>
          <li>
            <a href="">ORBITA Smart Solutions</a>
            </li>
        </ul>
        <h4><a href="" style={{color: 'burlywood'}}>View All Products</a></h4>
      </Typography>
      
      {products.map((product, index) => (
        <Card 
          key={index} 
          sx={{ 
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',  // Smooth transition
            cursor: 'pointer',  // Change cursor to pointer on hover
            '&:hover': { 
              boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',  // Shadow effect on hover
              transform: 'scale(1.05)'  // Zoom-in effect on hover
            }
          }}
        >
          <CardMedia
            component="img"
            height="200"
            image={product.image}
            alt={product.name}
            sx={{ objectFit: 'cover' }}  // Ensures the image covers without distortion
          />
          <CardContent>
            <Typography variant="h6" gutterBottom sx={{color: '#1E3E62', fontSize: {xs: '1rem', sm:'1rem', md:'1rem', lg:'1rem'}}}>
              {product.name}
            </Typography>
            <Typography variant='h2' gutterBottom sx={{color: 'gray', fontSize: {xs: '0.5rem', sm:'0.6', md:'0.7rem', lg:'0.8rem'}}}>
            {product.info}
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: 'center' }}>
            <Button variant="contained" sx={{backgroundColor: 'burlywood'}}>
              <a>View Details</a>
            </Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
}

export default Products;
