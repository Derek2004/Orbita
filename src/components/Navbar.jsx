//src /components/Navbar.jsx

import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useMediaQuery, Collapse, List, ListItem, ListItemText, Box } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

function Navbar() {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false); // State for product dropdown in mobile

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleProductsToggle = () => {
    setProductsOpen((prev) => !prev); // Toggle product dropdown on mobile
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#FFFFFF' }}>
      {/* Info bar */}
      <div className="info" style={{ padding: '0.5rem' }}>
        <ul
          style={{
            listStyle: 'none',
            margin: 0,
            padding: 0,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <li style={{ fontSize: '0.9em' }}>
            <EmailIcon sx={{ fontSize: '0.9rem', paddingRight: '8px' }} />
            <span>info@orbitakenya.com</span>
          </li>
          <li style={{ fontSize: '0.9rem' }}>
            <PhoneIcon sx={{ fontSize: '0.9rem', paddingRight: '8px' }} />
            +254-726-226-666
          </li>
        </ul>
      </div>

      {/* Navbar */}
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Logo */}
        <img
          src="/src/assets/images/logo2.png"
          alt="Logo"
          style={{ height: '40px', marginLeft: '35px' }}
        />

        {isMobile ? (
          <>
            {/* Hamburger menu icon */}
            {!menuOpen && (
              <IconButton
                edge="start"
                color="transparent"
                aria-label="menu"
                onClick={handleMenuToggle}
                sx={{ marginRight: '10px' }}
              >
                <MenuIcon sx={{ color: 'burlywood' }} />
              </IconButton>
            )}

            {/* Dropdown menu with close button */}
            <Collapse in={menuOpen} timeout="auto" unmountOnExit>
              <Box
                sx={{
                  position: 'absolute',
                  top: '70px',
                  left: 0,
                  right: 0,
                  backgroundColor: '#FFFFFF',
                  zIndex: 10,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  maxHeight: '80vh',  // Limit height to 80% of viewport
                  overflowY: 'auto',  // Enable vertical scrolling
                }}
              >
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="close"
                  onClick={handleMenuToggle}
                  sx={{ alignSelf: 'flex-end', marginRight: '10px', marginTop: '10px' }}
                >
                  <CloseIcon sx={{ color: 'burlywood' }} />
                </IconButton>

                <List component="nav">
                  {/* Menu Items */}
                  <ListItem button component="a" href="/home">
                    <ListItemText primary="Home" sx={{ color: '#0b1335' }} />
                  </ListItem>
                  <ListItem button component="a" href="/about-us">
                    <ListItemText primary="About Us" sx={{ color: '#0b1335' }} />
                  </ListItem>

                  {/* Products dropdown in mobile */}
                  <ListItem button onClick={handleProductsToggle}>
                    <ListItemText primary="Products" sx={{ color: '#0b1335' }} />
                  </ListItem>
                  <Collapse in={productsOpen} timeout="auto" unmountOnExit>
                    <Box sx={{ pl: 4 }}>
                      <ListItem button component="a" href="/product1">
                        <ListItemText primary="Hotel RFID Locks" sx={{ color: '#0b1335' }} />
                      </ListItem>
                      <ListItem button component="a" href="/product2">
                        <ListItemText primary="Hotel Acessories" sx={{ color: '#0b1335' }} />
                      </ListItem>
                      <ListItem button component="a" href="/product3">
                        <ListItemText primary="Hotel SafeBox" sx={{ color: '#0b1335' }} />
                      </ListItem>
                      <ListItem button component="a" href="/product3">
                        <ListItemText primary="Hotel Phone" sx={{ color: '#0b1335' }} />
                      </ListItem>
                      <ListItem button component="a" href="/product3">
                        <ListItemText primary="Hotel Hairdyer" sx={{ color: '#0b1335' }} />
                      </ListItem>
                      <ListItem button component="a" href="/product3">
                        <ListItemText primary="Bathroom Locks" sx={{ color: '#0b1335' }} />
                      </ListItem>
                      <ListItem button component="a" href="/product3">
                        <ListItemText primary="Cabinet Locks" sx={{ color: '#0b1335' }} />
                      </ListItem>
                      <ListItem button component="a" href="/product3">
                        <ListItemText primary="In Room Switches" sx={{ color: '#0b1335' }} />
                      </ListItem>
                      <ListItem button component="a" href="/product3">
                        <ListItemText primary="Mortise" sx={{ color: '#0b1335' }} />
                      </ListItem>
                      <ListItem button component="a" href="/product3">
                        <ListItemText primary="Smart Hotel Solution" sx={{ color: '#0b1335' }} />
                      </ListItem>
                    </Box>
                  </Collapse>

                  <ListItem button component="a" href="/solutions">
                    <ListItemText primary="Solutions" sx={{ color: '#0b1335' }} />
                  </ListItem>
                  <ListItem button component="a" href="/references">
                    <ListItemText primary="References" sx={{ color: '#0b1335' }} />
                  </ListItem>
                  <ListItem button component="a" href="/service">
                    <ListItemText primary="Service" sx={{ color: '#0b1335' }} />
                  </ListItem>
                  <ListItem button component="a" href="/news">
                    <ListItemText primary="News" sx={{ color: '#0b1335' }} />
                  </ListItem>
                  <ListItem button component="a" href="/contact">
                    <ListItemText primary="Contact" sx={{ color: '#0b1335' }} />
                  </ListItem>
                </List>
              </Box>
            </Collapse>
          </>
        ) : (
          <nav className="nav" style={{ display: 'flex', gap: '35px' }}>
            {/* Desktop Menu Items */}
            <a href="/home">Home</a>
            <a href="/about-us">About Us</a>

            {/* Products dropdown */}
            <div
              style={{ position: 'relative' }}
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <a href="/products">Products</a>
              {productsOpen && (
                <ul
                  style={{
                    fontFamily: 'monospace',
                    borderRadius: '6px',
                    position: 'absolute',
                    width: '180px',
                    top: '100%',
                    left: 0,
                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                    listStyle: 'none',
                    margin: 0,
                    padding: '10px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <li style={{padding: '3px'}}><a href="/product1">Hotel RFID Lock</a></li>
                  <li style={{padding: '3px'}}><a href="/product2">Hotel Acessories</a></li>
                  <li style={{padding: '3px'}}><a href="/product3">Hotel Safebox</a></li>
                  <li style={{padding: '3px'}}><a href="/product3">Hotel Phone</a></li>
                  <li style={{padding: '3px'}}><a href="/product3">Hotel Hairdryer</a></li>
                  <li style={{padding: '3px'}}><a href="/product3">Bathroom Locks</a></li>
                  <li style={{padding: '3px'}}><a href="/product3">Cabinet Locks</a></li>
                  <li style={{padding: '3px'}}><a href="/product3">In Room Switches</a></li>
                  <li style={{padding: '3px'}}><a href="/product3">Mortise</a></li>
                  <li style={{padding: '3px'}}><a href="/product3">Hotel Smart Solutions</a></li>
                </ul>
              )}
            </div>

            <a href="/solutions">Solutions</a>
            <a href="/references">References</a>
            <a href="/service">Service</a>
            <a href="/news">News</a>
            <a href="/contact">Contact</a>
          </nav>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
