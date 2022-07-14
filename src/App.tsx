
import { Button, Card, createTheme, FormControl, FormControlLabel, FormLabel, Grid, InputLabel, makeStyles, MenuItem, Radio, RadioGroup, Select, styled, TextField, ThemeProvider, Toolbar, Typography } from '@mui/material';
import { blue, green, red } from '@mui/material/colors';
import { useState } from 'react';
import NavBar from './components/NavBar';

const MyThemes = {
  theme1:createTheme({
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
  }),
  theme2: createTheme({
    palette: {
      primary: {
        main: '#CEE5D0',
        dark: 'blue',
        light: 'green',
      },
      secondary: {
        main: '#ECB390',
        dark: 'blue',
        light: 'green',
      }
    }
  })
}
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
const theme2 = createTheme({
  palette: {
    primary: {
      main: '#CEE5D0',
      dark: 'blue',
      light: 'green',
    },
    secondary: {
      main: '#ECB390',
      dark: 'blue',
      light: 'green',
    }
  }
});
// BY default it uses primary Palette 

const AppWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(1),
  minHeight: '150vh',
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

  borderRadius: '12px',
  cursor: 'pointer',
  maxWidth: '80px',
  '&:hover': {
    background: green[300]
  }
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
                  onChange={(e) => setColor(e.target.value)}
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
            {/* Nested Theme Provider */}
            <Grid item xs={6} padding='10px' >
              <CustomButton variant="outlined" color="primary" >Button 1</CustomButton>
              <ThemeProvider theme={theme2}>
                <CustomButton variant="outlined" color="secondary" >Button 2</CustomButton>
              </ThemeProvider>

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
            <Grid item xs={6} padding='10px'>
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
        <CustomCard>
          <Grid container my={4}>
            <Grid item xs={12} padding='10px'>
              <Typography variant='h5' gutterBottom >
                By defining a TypeScript interface for our variables, we get benefits that Sass variables can't match. Strict typing ensures theme implementors provide complete themes and use expected values, which ensures that a theme is valid before its used. Storing variables stored in a nested theme object also allow for better organization and discoverability through autocomplete of the available properties. While nested maps are possible in SASS, they're inconvenient to use.
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
