import React from "react";
import { useNavigate } from "react-router-dom";
import { Typography, TextField, Box, Button, Grid } from "@mui/material";

function ResetPassword({ nextStep }) {
  let Navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      password: data.get("password"),
      cpassword: data.get("cpassword"),
    });
  };

  async function resetPassword(values) {
    // console.log(values);
    const result = await fetch(
      process.env.REACT_APP_API_URL + "/user/resetPassword",
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
    Navigate("/login", { replace: true });
  }

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography align="center" variant="h6">
          Reset Password
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} m={3}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                size="small"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                name="cpassword"
                label="Confirm Password"
                size="small"
                type="password"
                id="cpassword"
                placeholder="Confirm password"
              />
            </Grid>
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Reset
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default ResetPassword;
