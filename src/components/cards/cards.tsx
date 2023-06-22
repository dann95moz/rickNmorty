
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { cardInfo } from '../../interfaces/cardInfo.interface';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, CardActionArea } from '@mui/material';
export function CardComponent(cardInfo: cardInfo){
  const [showDialog, setShowDialog] = useState(false);
  const [dialogData, setDialogData] = useState<cardInfo>()

  const handleDialogOpen =()=>{
    setDialogData(cardInfo)
    console.log('click');
    setShowDialog(true);
    
  }
  const handleDialogClose =()=>{
    setShowDialog(false);
    setDialogData({} as cardInfo);
  }
    return (
      <>
        <Card sx={{ height:500 }} onClick={handleDialogOpen}>
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
      <Dialog open={showDialog} onClose={handleDialogClose}>
        <DialogTitle>{cardInfo.name}</DialogTitle>
        <DialogContent>
          {/* Contenido adicional del diálogo */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Cerrar</Button>
        </DialogActions>
      </Dialog>
      </>
    );
    
}