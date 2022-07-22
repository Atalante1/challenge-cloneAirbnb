import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';
import Header from 'components/Header';
import React from 'react';
import OptionsTab from 'components/OptionsTab';
import Container  from '@mui/material/Container';
import LocationCards from 'components/LocationCards';
import Card from './components/Card'

import 'bootstrap/dist/css/bootstrap.min.css';
//import CarouselCard from 'components/CarouselCard';


function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box
        xs={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
        }}
      >
        <Box>
          <Header />
          <OptionsTab/>
          <Container maxWidth="xl" sx={{mb:3}}>
        {/* <LocationCards></LocationCards> */}
          </Container>
        </Box>
        
      <Container>
      <Card/>
      {/* <CarouselCard></CarouselCard> */}
      </Container>
      </Box>
    
      
  
    </React.Fragment>

  );
}

export default App;
