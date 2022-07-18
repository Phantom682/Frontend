import { TextInput, Box, Button, Group, Card } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { z } from "zod";
import { useForm, zodResolver } from "@mantine/form";
import { useContext } from "react";
import { OtpContext } from "../Signup/context.js";

const schema = z.object({
  userId: z.string(),
  otp: z.string(),
});

function VOTP() {
  const { userId, setUserId } = useContext(OtpContext);

  let Navigate = useNavigate();
  async function votp(values) {
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
    Navigate("/newpass", { replace: true });
  }

  const form = useForm({
    schema: zodResolver(schema),
    initialValues: {
      userId: userId.userId,
      otp: "",
    },
  });

  return (
    <div style={{ width: 320, margin: "auto" }}>
      <Card shadow="xl">
        Verify Otp
        <Box sx={{ maxWidth: 300 }} mx="auto">
          <form onSubmit={form.onSubmit((values) => votp(values))}>
            <TextInput
              required
              label="Enter your OTP"
              className="input col-xl-11"
              placeholder="Enter Otp"
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              
              {...form.getInputProps("otp")}
            />

            <Group position="center" mt="xl">
              <Button fullWidth type="submit">
                Submit
              </Button>
            </Group>
          </form>
        </Box>
      </Card>
    </div>
  );
}

export default VOTP;
