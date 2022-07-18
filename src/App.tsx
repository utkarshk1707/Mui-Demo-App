
import { Button, Card, createTheme, FormControl, FormControlLabel, FormLabel, Grid, InputLabel, makeStyles, MenuItem, Radio, RadioGroup, Select, styled, TextField, ThemeProvider, Toolbar, Typography } from '@mui/material';
import { blue, green, red } from '@mui/material/colors';
import { useState } from 'react';
import NavBar from './components/NavBar';

const MyThemes = {
  theme1: createTheme({
      palette: {
          sbn: '#e3cc91',
          hal: '#CEE5D0',
      }
  }),
  theme2: createTheme({
      palette: {
          sbn: '#CEE5D0',
          hal: '#ECB390'
      }
  })
}

// BY default it uses primary Palette 

const AppWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(1),
  minHeight: '150vh',
  minWidth: '300px',
  [theme.breakpoints.down('tablet')]: {
    backgroundColor: red[500],
  },
  [theme.breakpoints.up('tablet')]: {
    backgroundColor: blue[500],
  },
  [theme.breakpoints.up('desktop')]: {
    backgroundColor: green[500],
  },
}));

const CustomCard = styled(Card)(({ theme }) => ({
  marginTop: '5%',
}));



const App = () => {
  const [color, setColor] = useState('');
  const [UiTheme, setUiTheme] = useState(MyThemes['theme1']);

  return (
    <ThemeProvider theme={UiTheme}>
      <AppWrapper>
        <NavBar />
        <CustomCard>
          <Grid container my={4}>
            <Grid item tablet={12} padding='10px'>
              <Typography variant='h4' gutterBottom >
                Robust Theming
              </Typography>
            </Grid>
            <Grid item tablet={6} padding='10px'>
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Themes</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  onChange={(e) => {
                    let key = e.target.value;
                    let setTheme = key ==='theme1' ? MyThemes['theme1'] : MyThemes['theme2'];
                    setUiTheme(setTheme);
                  }}
                >
                  <FormControlLabel value={'theme1'} control={<Radio />} label="Theme1" />
                  <FormControlLabel value={'theme2'} control={<Radio />} label="Theme2" />
                  <FormControlLabel
                    value="disabled"
                    disabled
                    control={<Radio />}
                    label="Default"
                  />
                </RadioGroup>
              </FormControl>
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
