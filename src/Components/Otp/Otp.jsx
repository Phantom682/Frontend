import { TextInput, Button, Group, Box } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./Otp.css";
import { z } from "zod";
import { useForm, zodResolver } from "@mantine/form";
import { useContext } from "react";
import { OtpContext } from "../Signup/context.js";

const schema = z.object({
  userId: z.string(),
  otp: z.string(),
});

function OTP() {
  const { userId, setUserId } = useContext(OtpContext);

  let Navigate = useNavigate();
  async function otp(values) {
    console.log(values);
    const result = await fetch("http://localhost:5000/user/verifyOTP", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const data = await result.json();
    console.log(data);
    Navigate("/login", { replace: true });
  }

  const form = useForm({
    schema: zodResolver(schema),
    initialValues: {
      userId: userId.userId,
      otp: "",
    },
  });

  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
      <form onSubmit={form.onSubmit((values) => otp(values))}>
        <TextInput
          required
          label="Enter your OTP"
          onKeyPress={(event) => {
            if (!/[0-9]/.test(event.key)) {
              event.preventDefault();
            }
          }}
          value={otp}
          {...form.getInputProps("otp")}
        />

        <Group position="center" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
}

export default OTP;
