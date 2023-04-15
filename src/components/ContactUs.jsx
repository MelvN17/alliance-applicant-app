import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { List, ListItem, ListItemIcon } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';


export default function ContactUs() {
  return (
    //"BOX" SERVES AS THE CONTAINER OR THE WRAPPER
    <Box sx={{ flexGrow: 1 }}> 
      <Grid container spacing={2}>
        <Grid item md={12} sx={{padding: '2rem 0', marginTop: '2rem'}}>
          <Typography sx={{textAlign: 'center', fontFamily: 'Roboto Slab, serif', fontWeight: '700', color: '#FF0000'}} variant="h3"> 
            Contact Us
          </Typography>
          <Typography 
              sx={{textAlign: 'center',
              fontFamily: 'Poppins, serif',
              fontWeight: '700',
              padding: '1rem 0',
              }}
              variant="h5"> 
              Office Locations
          </Typography>
        </Grid>

        <Grid item md={6} >
          <Box sx={{width: '70%',  margin: "0 auto", padding: '2rem 0', marginTop: '2rem 0'}}> 
              <Typography 
                sx={{textAlign: 'left',
                fontFamily: 'Poppins, serif',
                fontWeight: '700',
                padding: '1rem 0',
                }}
                variant="h5"> 
                Cebu Head Office
              </Typography>

              <List>
                <ListItem>
                  <ListItemIcon>
                      <HomeIcon sx={{color: 'black'}}/>
                  </ListItemIcon>
                  <Typography sx={{textAlign: 'left', fontFamily: 'Poppins, serif' }} variant="p">
                      14th Floor, Buildcomm CenterSumilon Road, Cebu Business Park Cebu City 6000, Philippines
                  </Typography>
                </ListItem>

                <ListItem>
                  <ListItemIcon>
                      <PhoneIcon sx={{color: 'black'}}/>
                  </ListItemIcon>
                  <Typography sx={{textAlign: 'left', fontFamily: 'Poppins, serif' }} variant="p">+63-32-261-1705</Typography>
                </ListItem>

                <ListItem>
                  <ListItemIcon>
                    <PhoneAndroidIcon sx={{color: 'black'}}/>
                  </ListItemIcon>
                  <Typography sx={{textAlign: 'left', fontFamily: 'Poppins, serif' }} variant="paragraphp">&#40;+63&#41; 918-948-4041 <br/>&#40;+63&#41; 908-884-6922</Typography>
                </ListItem>

                <ListItem>
                  <ListItemIcon>
                    <EmailIcon sx={{color: 'black'}}/>
                  </ListItemIcon>
                  <Typography sx={{textAlign: 'left', fontFamily: 'Poppins, serif' }} variant="paragraphp">info@alliance.com.ph &#40;for Inquiries&#41; <br/>jobs@alliance.com.ph &#40;for applications&#41;</Typography>
                </ListItem>

              </List>
            
            </Box>
        </Grid>

        <Grid item md={6} >
          <Box sx={{width: '70%',  margin: "0 auto", padding: '2rem 0', marginTop: '2rem 0'}}> 
            <Typography 
                sx={{textAlign: 'left',
                fontFamily: 'Poppins, serif',
                fontWeight: '700',
                padding: '1rem 0',
                }}
                variant="h5"> 
                Manila Office
            </Typography>

            <List>
              <ListItem>
                  <ListItemIcon>
                    <HomeIcon sx={{color: 'black'}}/>
                  </ListItemIcon>
                  <Typography sx={{textAlign: 'left', fontFamily: 'Poppins, serif' }} variant="p">
                    7th Floor, Santolan Town Plaza, 276 Santolan Road Little Baguio, San Juan City, 1500 Metro Manila, Philippines
                  </Typography>
              </ListItem>

              <ListItem>
                  <ListItemIcon>
                    <PhoneIcon sx={{color: 'black'}}/>
                  </ListItemIcon>
                  <Typography sx={{textAlign: 'left', fontFamily: 'Poppins, serif' }} variant="p">+63-2-7739-9038</Typography>
              </ListItem>

            </List>
            
          </Box> 
        </Grid>

        <Grid item md={6} >
          <Box sx={{width: '70%',  margin: "0 auto", padding: '2rem 0', marginTop: '2rem 0'}}> 
            <Typography 
              sx={{textAlign: 'left',
              fontFamily: 'Poppins, serif',
              fontWeight: '700',
              padding: '1rem 0',
              }}
              variant="h5"> 
              Japan Office
            </Typography>

            <List>
                <ListItem>
                  <ListItemIcon>
                      <HomeIcon sx={{color: 'black'}}/>
                  </ListItemIcon>
                    <Typography sx={{textAlign: 'left', fontFamily: 'Poppins, serif' }} variant="p">
                      2-5-7-201 Hirakawa cho, Chiyoda-kuTokyo, 102-0093 Japan
                    </Typography>
                </ListItem>

                <ListItem>
                  <ListItemIcon>
                      <PhoneIcon sx={{color: 'black'}}/>
                  </ListItemIcon>
                      <Typography sx={{textAlign: 'left', fontFamily: 'Poppins, serif' }} variant="p">+81-3-5215-9006 <br/> &#40;FAX&#41; +81-3-5215-9004</Typography>
                </ListItem>

                <ListItem>
                  <ListItemIcon>
                      <EmailIcon sx={{color: 'black'}}/>
                  </ListItemIcon>
                      <Typography sx={{textAlign: 'left', fontFamily: 'Poppins, serif' }} variant="paragraphp">y_isano@asji.jp &#40;Mr. Yoshihiro Isano&#41;</Typography>
                </ListItem>

            </List>
          </Box>
        </Grid>

      </Grid>
    </Box>
  );
}