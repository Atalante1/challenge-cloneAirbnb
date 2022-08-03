// import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Switch, Route, Router , BrowserRouter} from "react-router-dom";
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';
import Header from 'components/Header';
import React from 'react';
import OptionsTab from 'components/OptionsTab';
import Container from '@mui/material/Container';
import LocationCards from 'components/LocationCards';
import Card from './components/Card'
import InfoCard from './components/InfoCard'
import { Grid } from '@mui/material';

import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from 'components/HomePage';
import DetailPage from 'components/DetailPage';


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
          <OptionsTab />
          <Container maxWidth="xl" sx={{ mb: 3 }}> 
      {/* <LocationCards></LocationCards>} */}
      </Container>
        </Box>
        
      <Container>
        <Grid container rowSpacing={2} columnSpacing={3}>
            <InfoCard></InfoCard>
            </Grid>
        </Container>

      {/* <Card/> */}

      {/* <CarouselCard></CarouselCard> */}

      </Box>



{/* 
      <BrowserRouter>
        <Route path='/' element={<HomePage />} />
        <Route path='/detail' element={<DetailPage />} />
        </BrowserRouter> */}

    </React.Fragment>

  );
}

export default App;
