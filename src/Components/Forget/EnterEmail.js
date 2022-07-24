import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Typography, TextField, ButtonGroup, Box, Button, Grid } from "@mui/material";

import { OtpContext } from "../Signup/context.js";

function EnterEmail({ nextStep }) {
  let Navigate = useNavigate();
  const { userId, setUserId } = useContext(OtpContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
    });
  };

  async function verifyEmail(values) {
    console.log(values);
    const result = await fetch(
      process.env.REACT_APP_API_URL + "/user/forgotPassword",
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
    console.log(data);
    setUserId({
      userId: data.data.userId,
    });
    Navigate("/votp", { replace: true });
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
          Enter your Email
        </Typography>

        <Box component="form" noValidate onSubmit={handleSubmit} m={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              required
              id="email"
              name="email"
              size="small"
              label="Enter your Email"
              autoComplete="email"
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

export default EnterEmail;
