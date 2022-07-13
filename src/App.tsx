
import { Button, Card, createTheme, FormControl, Grid, InputLabel, makeStyles, MenuItem, Select, styled, TextField, ThemeProvider, Toolbar, Typography } from '@mui/material';
import { blue, green, red } from '@mui/material/colors';
import { useState } from 'react';
import NavBar from './components/NavBar';


const theme = createTheme({
  palette: {
    primary: {
      main: '#e3cc91',
      dark: 'blue',
      light: 'green',
    },
    secondary: {
      main: '#e3cc91',
      dark: 'blue',
      light: 'green',
    }
  }
});
// const theme2 = createTheme({
//   palette: {
//     primary: {
//       main: '#e3cc91',
//       dark: 'blue',
//       light: 'green',
//     },
//     secondary: {
//       main: '#e3cc91',
//       dark: 'blue',
//       light: 'green',
//     }
//   }
// });
// BY default it uses primary Palette 

const AppWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(1),
  minHeight:'150vh',
  minWidth: '300px',
  [theme.breakpoints.down('md')]: {
    backgroundColor: red[500],
  },
  [theme.breakpoints.up('md')]: {
    backgroundColor: blue[500],
  },
  [theme.breakpoints.up('lg')]: {
    backgroundColor: green[500],
  },
}));

const CustomCard = styled(Card)(({ theme }) => ({
  marginTop: '5%',
}));

const CustomButton = styled(Button)(({ theme }) => ({
  background:theme.palette.secondary.main,
  borderRadius:'80px',
  cursor: 'pointer',
  maxWidth: '80px',
  '&:hover': {
    background: green[300]
  }
}));

const App = () => {
const [color,setColor] =useState('');

  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <NavBar />
        <CustomCard>
          <Grid container my={4}>
            <Grid item xs={12} padding='10px'>
              <Typography variant='h4' gutterBottom >
                VAST COMPONENT LIBRARY THAT CAN BE CUSTOMIZED AS PER NEED
              </Typography>
            </Grid>
            <Grid item xs={3} padding='10px'>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">My BG</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={color}
                  label="Color"
                  onChange={(e) =>setColor(e.target.value)}
                >
                  <MenuItem value={'red'}>Red</MenuItem>
                  <MenuItem value={'green'}>Green</MenuItem>
                  <MenuItem value={'blue'}>Blue</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            
            <Grid item xs={6} padding='10px'>
              <TextField
                placeholder="Placeholder here"
                label="Text Input" />
            </Grid>
            <Grid item xs={6} padding='10px' >
              <CustomButton variant="outlined" color="primary" ></CustomButton>
              <CustomButton variant="outlined" color="primary" ></CustomButton>
              <CustomButton variant="outlined" color="primary" ></CustomButton>
            </Grid>
          </Grid>
        </CustomCard>
        <CustomCard>
          <Grid container my={4}>
            <Grid item xs={12} padding='10px'>
              <Typography variant='h4' gutterBottom >
              Robust Theming
              </Typography>
            </Grid>
          </Grid>
        </CustomCard>
        <CustomCard>
          <Grid container my={4}>
            <Grid item xs={12} padding='10px'>
              <Typography variant='h4' gutterBottom >
               LIBRARY THAT CAN BE CUSTOMIZED AS PER NEED
              </Typography>
            </Grid>
          </Grid>
        </CustomCard>
      </AppWrapper>
    </ThemeProvider>
  );
}
// Heads Up for tommorow:
// Note : 1. Themeing implemented with redux store will be much more robust, as we can design our typography , color pallete,
            // customize components etc. for all of our webThemes for SBN AND HAL ,etc.
export default App;
