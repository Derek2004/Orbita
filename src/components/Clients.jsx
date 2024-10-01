import React from 'react';
import './App.css'
import { Typography } from '@mui/material';

function Clients() {
  const clients = [
    { logo: '/src/assets/images/heron.jpg' },
    { logo: '/src/assets/images/heron.jpg' },
    { logo: '/src/assets/images/heron.jpg' },
    { logo: '/src/assets/images/heron.jpg' },
    { logo: '/src/assets/images/heron.jpg' },
    { logo: '/src/assets/images/heron.jpg' },
  ];

  return (
    <div className="happy-clients">
      <div className="second-heading">
        Our Clients
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
              <Typography variant='h4'
              style={{
                color: '#555',
                display: 'flex',
                justifyContent: 'center',
                paddingBottom: '30px',
                textDecoration: 'underline',
                }}
              >
                Our Clients
              </Typography>
          </div>
          <div className="col-md-12">
            <div className="owl-clients owl-carousel">
              {clients.map((client, index) => (
                <div className="client-item" key={index}>
                  <img src={client.logo} alt={`Client ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clients;
