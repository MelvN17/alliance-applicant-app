import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


export default function JoinUs() {
  return (
    //"BOX" SERVES AS THE CONTAINER OR THE WRAPPER
    <Box sx={{ flexGrow: 1 }}> 
        <Grid container spacing={2}>
            <Grid item md={12} sx={{padding: '2rem 0', marginTop: '2rem'}}>
                <Typography sx={{textAlign: 'center', fontFamily: 'Roboto Slab, serif', fontWeight: '700', color: '#FF0000'}} variant="h3"> 
                    Join Us
                </Typography>
            </Grid>
            <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh' }}
            >

                <Grid item xs={2}>
                    <Card sx={{maxWidth: 400, width: 400, height: 650}}>
                            
                        <CardMedia
                        component="img"
                        height="400"
                        width="20"
                        marginTop='2rem'

                        image="/src/img/joinUs.png"
                        alt="Join Us"     
                        padding = "50"
                        />

                        <CardContent alignItems="center">
                             <Typography gutterBottom variant="h5" component="div" textAlign='center'>
                                Applicant
                            </Typography>
                            <Typography variant="body2" fontSize="medium" color="text.primary" textAlign={'justify'} sx={{fontFamily: 'Poppins, serif'}}>
                                placerat scelerisque ex vitae mollis. Curabitur at pellentesque mi, eu consequat arcu. Fusce tincidunt nunc eget commodo tempus. Morbi viverra justo vel sapien interdum,
                            </Typography>
                        </CardContent>
                    </Card>
                    
                    <Grid paddingTop='4rem'>
                    <div style={{textAlign:"center"}}>
                        <Button size="small" color="error" variant='contained' alignItems="center"  endIcon={<ArrowForwardIosIcon/>}>
                             Continue 
                        </Button>
                    </div>
                    </Grid>
                
                </Grid>
            </Grid>
        </Grid>
    </Box>
  );
}