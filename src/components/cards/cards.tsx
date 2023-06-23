
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { cardInfo } from '../../interfaces/cardInfo.interface';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import {CardActionArea } from '@mui/material';
export function CardComponent(cardInfo: cardInfo){
  

 
    return (
      <>
        <Card sx={{ height:500 }} >
        <CardActionArea sx={{height:'100%'}}>
          <CardMedia
            component="img"
            height="77%"
            image={cardInfo.image}
            alt="card content"
          />
          <CardContent>
          <Stack direction="row" spacing={1}>
      <Chip label={cardInfo.location} size="small" />
      
    </Stack>
            <Typography gutterBottom variant="h6" component="h6">
             {cardInfo.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {cardInfo.specie}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      </>
    );
    
}