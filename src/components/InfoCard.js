import * as React from 'react';
import Data from '../data/data.json'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { BrowserRouter as Link } from 'react-router-dom';



function InfoCard() {
    
    return (
        Data.map(datas => {
            return (

                <div style={{ padding: 30 }} key={datas._id}>
                    <Card sx={{ maxWidth: 345 }}
                        className="carouselCard"

                    >
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={require('images/housephoto.jpeg')}
                                alt="photo"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {datas.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {datas.interaction}
                                </Typography>
                                <Typography>
                                    {datas.property_type}
                                </Typography>
                                <Typography>
                                    {datas.room_type}
                                </Typography>


                            </CardContent>
                            <Link to="/detail">
                                <Button onClick={() => console.log("its working" + (datas._id))}
                                    size="small" color="primary" >
                                    Detail
                                </Button>
                            </Link>
                        </CardActionArea>
                    </Card>
                </div>


            )
        }))
}



export default InfoCard;