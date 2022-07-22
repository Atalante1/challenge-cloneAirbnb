import React from 'react';
import Data from '../data/data.json'
import Typography from '@mui/material/Typography';
import { FaRegHeart } from 'react-icons/fa';
import {
  fixedIcon,
  carouselImage,

} from 'themes/commonStyles';
import Box from '@mui/material/Box';


function Card() {
  return (
    <div>
      {
        Data.map(datas => {
          return (
            <div className='box' key={datas.id}>
              <Box
                className="carouselCard"
                sx={{
                  flexGrow: 1,
                  position: 'relative',
                }}
              >
                <Box sx={fixedIcon}>
                  <FaRegHeart size={24} color="#fff" />
                </Box>
                <img className='img' sx={carouselImage} src={datas.images.picture_url}></img>
              </Box>
              <Typography component="h3">  {datas.name}</Typography>
              <Typography component="h4">  {datas.property_type}</Typography>
              <Typography component="h5">  {datas.interaction}</Typography>
            </div>


          )
        })
      }

    </div>
  );
}

export default Card;