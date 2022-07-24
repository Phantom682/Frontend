import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Typography, TextField, Box, Button, Grid } from "@mui/material";
import { OtpContext } from "../Signup/context.js";

function Otp() {
  const { userId, setUserId } = useContext(OtpContext);
  let Navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      userId: userId.userId,
      otp: data.get("otp"),
    });
  };

  async function otp(values) {
    // console.log(values);
    const data = await result.json();
    const result = await fetch(
      process.env.REACT_APP_API_URL + "/user/verifyOTP",
      {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    // console.log(data);
    Navigate("/login", { replace: true });
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography component="h1" variant="h5">
        Email Verification
      </Typography>

      <Box component="form" noValidate onSubmit={handleSubmit} m={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            size="small"
            id="otp"
            name="otp"
            label="Enter Otp"
            type="text"
            onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
          />
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
    </Box>
  );
}

export default Otp;
