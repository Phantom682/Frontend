import * as React from "react";
import { useNavigate } from "react-router-dom";
import {
  Typography,
  TextField,
  Box,
  Button,
  Grid,
  Avatar,
  FormControlLabel,
  Checkbox,
  Link,
  Card,
  Container,
  FormControl,
  InputLabel,
  Select,
  Stack,
} from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import MenuItem from "@mui/material/MenuItem";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { HomeIcon } from "@radix-ui/react-icons";

export default function Basic2() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          firstName: data.get("firstName"),
          lastName: data.get("lastName"),
          gender: data.get("gender"),
          dob: data.get("dob"),
          email: data.get("email"),
          number: data.get("number"),
        });
      };

  const [value, setValue] = React.useState(null);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        marginTop: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
     <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <HomeIcon />
                    </Avatar>

      <Typography component="h1" variant="h5">
        Basic Details
      </Typography>
      <Card sx={{ maxWidth: 450 }}>
        <Box component="form" noValidate onSubmit={handleSubmit} m={3}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                size="small"
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                size="small"
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Basic example"
                  value={value}
                  id="dob"
                  name="dob"
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label" size="small">
                  Gender
                </InputLabel>

                <Select
                  labelId="demo-simple-select-label"
                  id="gender"
                  label="Gender"
                  name="gender"
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
                size="small"
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                size="small"
                name="number"
                id="number"
                label="Phone Number"
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </Grid>
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Update
          </Button>
        </Box>
      </Card>
    </Box>
  );
}
