
import { Button, Card, Container, createTheme, FormControl, FormControlLabel, FormLabel, Grid, InputLabel, makeStyles, MenuItem, Radio, RadioGroup, Select, styled, TextField, ThemeProvider, Toolbar, Typography } from '@mui/material';
import { blue, green, red } from '@mui/material/colors';
import { useState } from 'react';

const MyThemes = {
    sbn: createTheme({
        palette: {
            primary: {
                main:'#e3cc91',
        },
    }}),
    hal: createTheme({
        palette: {
            primary:{
                main:'#CEE5D0'
            } 
        }
    })
}

// BY default it uses primary Palette 

const CardWrapper = styled(Container)(({ theme }) => ({
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


const CardComponent = () => {
    const [UiTheme, setUiTheme] = useState(MyThemes['hal']);

    return (
        <ThemeProvider theme={UiTheme}>
            <CardWrapper>
                <CustomCard>
                    <Grid container my={4}>
                        <Grid item tablet={12} padding='10px'>
                            <Typography variant='h4' gutterBottom >
                                TypogGraphy 1
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
                                        let setTheme = key === 'sbn' ? MyThemes['sbn'] : MyThemes['hal'];
                                        setUiTheme(setTheme);
                                    }}
                                >
                                    <FormControlLabel value={'sbn'} control={<Radio />} label="Sbn" />
                                    <FormControlLabel value={'hal'} control={<Radio />} label="Hal" />
                                    <FormControlLabel
                                        value="disabled"
                                        disabled
                                        control={<Radio />}
                                        label="Default"
                                    />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid item tablet={12} padding='10px'>
                            <Typography variant='h4' gutterBottom >
                                Robust Theming
                            </Typography>
                        </Grid>
                    </Grid>
                </CustomCard>
            </CardWrapper>
        </ThemeProvider>
    );
}
// Heads Up for tommorow:
// Note : 1. Themeing implemented with redux store will be much more robust, as we can design our typography , color pallete,
// customize components etc. for all of our webThemes for SBN AND HAL ,etc.
export default CardComponent;
