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
} from "@mui/material";
import Submit from "../Button/Button.js";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

export default function Login2() {
  let Navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  async function login(values) {
    // console.log(values);
    const result = await fetch(
      process.env.REACT_APP_API_URL + "/user/login_user",
      {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    const data = await result.json();
    // console.log(data);
    Navigate("/profile", { replace: true });
  }

  return (
    <Box
      sx={{
        marginTop: 5,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Login
      </Typography>
      <Card sx={{ maxWidth: 400 }}>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          m={3}
         
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            size="small"
            autoComplete="email"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            size="small"
            id="password"
            autoComplete="new-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="/step" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/" variant="body2">
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </Box>
  );
}
