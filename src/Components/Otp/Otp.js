import { TextInput, Box, Button, Group } from "@mantine/core";
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

function Otp() {
  const { userId, setUserId } = useContext(OtpContext);
  let Navigate = useNavigate();



  async function otp(values) {
    // console.log(values);
    const data = await result.json();
    const result = await fetch(process.env.REACT_APP_API_URL + "/user/verifyOTP", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    // console.log(data);
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
          className="input col-xl-11"
          placeholder="Enter Otp"
          type="number"
          value={otp}
          {...form.getInputProps("otp")}
        />

        <Group position="center" mt="xl">
          <Button fullWidth type="submit">
            Submit
          </Button>
        </Group>
      </form>
    </Box>
  );
}

export default Otp;
