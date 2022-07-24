import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Typography, TextField, ButtonGroup, Box, Button, Grid } from "@mui/material";
import { OtpContext } from "../Signup/context.js";

function VerifyEmail({ nextStep }) {
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

  async function verifyOtp(values) {
    // console.log(values);
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
    const data = await result.json();
    // console.log(data);
    Navigate("/newpass", { replace: true });
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
          Verify your Email
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} m={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              required
              id="otp"
              name="otp"
              size="small"
              label="Enter Otp"
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
    </>
  );
}

export default VerifyEmail;
