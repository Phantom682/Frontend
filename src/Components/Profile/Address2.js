import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { FormControl, InputLabel, Select, } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import Stack from '@mui/material/Stack';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider, } from '@mui/material/styles';
import Card from '@mui/material/Card';
import { HomeIcon } from '@radix-ui/react-icons';

const theme = createTheme();

export default function Address2() {
    const [age, setAge] = React.useState('');


    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });

    };

    const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />

                <Box

                    sx={{
                        marginBottom: 7,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >


                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <HomeIcon />
                    </Avatar>


                    <Typography component="h1" variant="h5">
                        Address Details
                    </Typography>
                    <Card sx={{ maxWidth: 450 }}>

                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }} m={3} pt={2}>


                            <Grid container spacing={2}>


                                <Grid item xs={12} sm={6}>

                                    <TextField
                                        autoComplete=""
                                        name="Address"
                                        required
                                        fullWidth
                                        id="address"
                                        label="Address"
                                        autoFocus
                                    />

                                </Grid>

                                <Grid item xs={12} sm={6}>

                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Country</InputLabel>

                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"

                                            label="Country"

                                        >
                                            <MenuItem value="Male">Male</MenuItem>
                                            <MenuItem value="Female">Female</MenuItem>
                                            <MenuItem value="Transgender">Transgender</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={6}>

                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">State</InputLabel>

                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"

                                            label="State"

                                        >
                                            <MenuItem value="Male">Male</MenuItem>
                                            <MenuItem value="Female">Female</MenuItem>
                                            <MenuItem value="Transgender">Transgender</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>

                                <Grid item xs={12} sm={6}>

                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">District</InputLabel>

                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"

                                            label="District"

                                        >
                                            <MenuItem value="Male">Male</MenuItem>
                                            <MenuItem value="Female">Female</MenuItem>
                                            <MenuItem value="Transgender">Transgender</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={6}>

                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">City</InputLabel>

                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"

                                            label="City"

                                        >
                                            <MenuItem value="Male">Male</MenuItem>
                                            <MenuItem value="Female">Female</MenuItem>
                                            <MenuItem value="Transgender">Transgender</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>



                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="pincode"
                                        label="Pincode"
                                        input type="number"
                                        autoComplete="new-password"
                                    />
                                </Grid>

                            </Grid>

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Submit
                            </Button>




                        </Box>
                    </Card>



                </Box>

            </Container>
        </ThemeProvider>
    );
}