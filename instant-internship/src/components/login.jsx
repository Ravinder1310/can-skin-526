import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { HStack, Text,Image } from '@chakra-ui/react';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main">
        <CssBaseline />
        <Box
          sx={{
            margin:'auto',
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            // alignItems: 'center',
            boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
            padding:'20px',
            width:'50%',
           
           
          }}
        >
         
          <Text textAlign={'center'} fontSize='35px' mt={'0px'} mb='60px'>
            Login
          </Text>
          <Box  mt='-20px' bgcolor={'#fceff1'} border={'2px dotted red'}  p='0px 10px' mb='30px'>
            <Text textAlign={'left'} >If you are a company looking to hire interns, please login as a company by clicking <span style={{color:'blue',_hover:{cursor:'pointer'}}}  >here</span></Text>
          </Box>
         <Image _hover={{cursor:'pointer'}} h={'60px'} w='68%' mt='30px' margin={'auto'} src='https://tse1.mm.bing.net/th?id=OIP.JfmT0k-jHFYxNCsKMkk1DgHaBo&pid=Api&P=0'/>
         <Image _hover={{cursor:'pointer'}} h={'50px'} w='66%' margin={'auto'} src='https://tse3.mm.bing.net/th?id=OIP.pZ6bfFCJw4r8KiSEhPXdsQAAAA&pid=Api&P=0'/>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Box display={'flex'} justifyContent='space-between' alignItems={'center'}>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Link href="#" variant="body2">
                  Forgot password?
                </Link>
            </Box>
           
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Box display={'flex'} justifyContent='center' alignItems={'center'} gap='5px'>
            <h4 >Don't have an account? </h4>
            <Link href={'/signUp'} style={{textDecoration:'none'}}>Create your account</Link>
            </Box>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}