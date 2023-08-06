
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import {CardActionArea } from '@mui/material';
import { characterCard } from '../../interfaces/cards/characterCard.interface';
export function CharacterCard(cardInfo: characterCard){
  

 
    return (
      <>
        <Card  >
        <CardActionArea >
          <CardMedia
            component="img"
            
            image={cardInfo.image}
            alt="card content"
          />
          <CardContent>
          <Stack direction="row" spacing={1}>
      
    </Stack>
            <Typography gutterBottom variant="h6" component="h6" sx={{whiteSpace: "nowrap", textOverflow:"ellipsis", overflow:"hidden"}}>
             {cardInfo.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" >
              {cardInfo.specie}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      </>
    );
    
}