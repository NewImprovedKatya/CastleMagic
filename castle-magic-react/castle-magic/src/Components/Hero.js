import React from 'react';
import heroCastle from "../app/assets/hero-castle.jpg";
import {Container} from 'reactstrap';

const Hero = () => {
    return (
        <header style={{ paddingLeft: 0 }}>
          <div
            className=' text-center bg-image'
            style={{ backgroundImage: `url(${heroCastle})`, height: 800, position: 'relative', backgroundSize: 'cover',
    backgroundPosition: 'center' }}
          >
            <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', height: 800, width: "100%" }}>
              <Container className='d-flex justify-content-center align-items-center h-100'>
                <div className='text-light'>
                  <h1 className='mb-3 display-2 fw-bold'>CastleMagic</h1>
                  <h4 className='mb-3'>A source for building medieval style stone castles, plans, designs, and castles for sale</h4>
                  <a className='btn btn-light btn-lg m-2' href='#!' role='button'>
                    Plans
                  </a>
                  <a className='btn btn-light btn-lg m-2' href='#!' role='button'>
                    Gallery
                  </a>
                </div>
              </Container>
            </div>
          </div>
        </header>
      );
};

export default Hero;
