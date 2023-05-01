import { React } from 'react'
import '../App.css'
import { Box, Grid, Typography, Card, CardContent, CardMedia, Button } from '@mui/material'
import Navbar from '../components/Navbar'
import HomeItem from '../components/HomeItem'
import PageBanner from '../components/PageBanner';
import Footer from '../components/Footer'
import IconList from '../components/IconList'
import PhoneIcon from '@mui/icons-material/Phone';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-scroll';


let cebu_head_office_list = [
  { text: <>14th Floor, Buildcomm CenterSumilon Road, Cebu Business ParkCebu City 6000, Philippines</>, icon: <HomeIcon sx={{ color: "black" }} /> },
  { text: <>+63-32-261-1705</>, icon: <PhoneIcon sx={{ color: "black" }} /> },
  { text: <>&#40;+63&#41; 918-948-4041 <br />&#40;+63&#41; 908-884-6922</>, icon: <PhoneAndroidIcon sx={{ color: "black" }} /> },
  { text: <>info@alliance.com.ph &#40;for Inquiries&#41; <br />jobs@alliance.com.ph &#40;for applications&#41;</>, icon: <EmailIcon sx={{ color: "black" }} /> },
]

let manila_office_list = [
  { text: <>7th Floor, Santolan Town Plaza, 276 Santolan Road Little Baguio, San Juan City, 1500 Metro Manila, Philippines</>, icon: <HomeIcon sx={{ color: "black" }} /> },
  { text: <>+63-2-7739-9038</>, icon: <PhoneIcon sx={{ color: "black" }} /> },
]

let japan_office_list = [
  { text: <>2-5-7-201 Hirakawa cho, Chiyoda-kuTokyo, 102-0093 Japan</>, icon: <HomeIcon sx={{ color: "black" }} /> },
  { text: <>+81-3-5215-9006 <br /> &#40;FAX&#41; +81-3-5215-9004</>, icon: <PhoneIcon sx={{ color: "black" }} /> },
  { text: <>y_isano@asji.jp &#40;Mr. Yoshihiro Isano&#41;</>, icon: <EmailIcon sx={{ color: "black" }} /> },
]

function Home() {

  return (
    <>
      <Navbar navItems={['Home', 'About', 'Join', 'Contact']} />
      <PageBanner />
      <HomeItem title='About Us' id='about us'>
        <Grid item md={6} sx={{ width: '100%', height: 'auto', }}>
          <img src="/src/img/building.png" alt="Building" style={{ width: "100%", height: "600px" }} />
        </Grid>
        <Grid item md={6} >
          <Box sx={{ width: '80%', margin: "0 auto", padding: '2rem ', marginTop: '2rem' }} id='about'>
            <Typography
              sx={{
                textAlign: 'left',
                fontFamily: 'Poppins, serif',
                fontWeight: '700',
                padding: '2rem 0',
              }}
              variant="h5">
              WHO WE ARE AND WHAT DO WE DO
            </Typography>
            <Typography sx={{ textAlign: 'left', fontFamily: 'Poppins, serif', }} variant="body1" >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, necessitatibus facere fugiat placeat repellat magni atque sint doloremque ipsa veniam veritatis laboriosam maiores! Architecto reprehenderit deleniti, exercitationem suscipit molestiae facere qui soluta, voluptatibus odio vitae eos earum. Doloremque quis, dolore repellat tempore maxime ratione unde dicta id fugiat quo sint officia beatae amet quae. Explicabo doloremque rem dignissimos. Sed voluptas nulla illum nesciunt ad consequuntur doloremque tempore, neque laborum ipsum ducimus, optio, unde tempora! Perspiciatis ullam laboriosam ducimus, qui totam animi eveniet cum sit quasi consequuntur, excepturi fugiat eius voluptatibus saepe quo atque, ex vitae aspernatur suscipit. Maxime, est blanditiis.
            </Typography>
          </Box>
        </Grid>
      </HomeItem>

      <HomeItem title='Join Us'>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: '100vh' }}
        >

          <Grid item xs={2}>
            <Card sx={{ maxWidth: 400, width: 400, height: 650 }}>

              <CardMedia
                component="img"
                height="400"
                width="20"
                marginTop='2rem'

                image="/src/img/joinUs.png"
                alt="Join Us"
                padding="50"
              />

              <CardContent alignItems="center">
                <Typography gutterBottom variant="h5" component="div" textAlign='center'>
                  Applicant
                </Typography>
                <Typography variant="body2" fontSize="medium" color="text.primary" textAlign={'justify'} sx={{ fontFamily: 'Poppins, serif' }}>
                  placerat scelerisque ex vitae mollis. Curabitur at pellentesque mi, eu consequat arcu. Fusce tincidunt nunc eget commodo tempus. Morbi viverra justo vel sapien interdum,
                </Typography>
              </CardContent>
            </Card>

            <Grid paddingTop='4rem'>
              <div style={{ textAlign: "center" }}>
                <Button size="small" color="error" variant='contained' alignItems="center" endIcon={<ArrowForwardIosIcon />}>
                  Continue
                </Button>
              </div>
            </Grid>

          </Grid>
        </Grid>
      </HomeItem>

      <HomeItem title='Contact Us' subtitle='Office Locations'>
        <IconList items={cebu_head_office_list} title='Cebu Head Office' />
        <IconList items={manila_office_list} title='Manila Office' />
        <IconList items={japan_office_list} title='Japan Office' />
      </HomeItem>
      <Footer />
    </>
  )
}

export default Home
