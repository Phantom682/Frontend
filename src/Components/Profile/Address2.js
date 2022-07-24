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

export default function Address2() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      address: data.get("address"),
      country: data.get("country"),
      state: data.get("state"),
      district: data.get("district"),
      city: data.get("city"),
      pincode: data.get("pincode"),
    });
  };

  const [value, setValue] = React.useState(null);
  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        marginBottom: 7,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <HomeIcon />
      </Avatar>

      <Typography component="h1" variant="h5">
        Address Details
      </Typography>
      <Card sx={{ maxWidth: 450 }}>
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit}
          sx={{ mt: 3 }}
          m={3}
          pt={2}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="address"
                required
                size="small"
                fullWidth
                id="address"
                label="Address"
                autoFocus
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel size="small" id="demo-simple-select-label">
                  Country
                </InputLabel>

                <Select
                  labelId="demo-simple-select-label"
                  id="country"
                  size="small"
                  name="country"
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
                <InputLabel size="small" id="demo-simple-select-label">
                  State
                </InputLabel>

                <Select
                  labelId="demo-simple-select-label"
                  id="state"
                  name="state"
                  size="small"
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
                <InputLabel id="demo-simple-select-label" size="small">
                  District
                </InputLabel>

                <Select
                  labelId="demo-simple-select-label"
                  id="district"
                  name="district"
                  label="District"
                  size="small"
                >
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                  <MenuItem value="Transgender">Transgender</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label" size="small">
                  City
                </InputLabel>

                <Select
                  labelId="demo-simple-select-label"
                  id="city"
                  name="city"
                  label="City"
                  size="small"
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
                id="pincode"
                label="Pincode"
                size="small"
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
