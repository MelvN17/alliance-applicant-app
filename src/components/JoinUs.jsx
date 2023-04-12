import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import joinUs from '../img/joinUs.png';

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

                <Grid item xs={3}>
                    <Card sx={{ maxWidth: 400 }}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            //height="600"
                            //width="300"

                            image="/src/img/joinUs.png"
                            alt="Join Us"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="div" textAlign='center'>
                                Applicant
                            </Typography>
                            <Typography variant="body2" color="text.secondary" textAlign={'justify'}>
                            Praesent placerat scelerisque ex vitae mollis. Curabitur at pellentesque mi, eu consequat arcu. Fusce tincidunt nunc eget commodo tempus. Morbi viverra justo vel sapien interdum,
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions style={{justifyContent: 'center'}}>
                            <Button size="small" color="error" variant='contained' alignItems="center">
                             Continue 
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Grid>
    </Box>
  );
}