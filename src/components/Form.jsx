import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Form() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' }
      }}
    >
        <Grid>
            <Box sx={{ border: '1px black solid', borderRadius: '8px', width: '50%',  }}>
                <Grid display="flex"
                flexDirection="row"
                alignItems="center">
                    <Grid>
                        <AccountCircle/>
                    </Grid>


            
                    <Grid width={'10rem'}>
                        <TextField
                        id="outlined"
                        label="Email"
                        variant="standard"
                        bo
                        sx={{ width: '1000px' }}
                        />
                    </Grid>
                    

                    </Grid>

            </Box>
        </Grid>
        <Grid>
            <Button size="small" color="error" variant='contained' alignItems="center"  endIcon={<ArrowForwardIosIcon/>}>
                Login 
            </Button>
        </Grid>

    </Box>
  );
}

