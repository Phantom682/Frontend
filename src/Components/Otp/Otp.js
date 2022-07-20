import { TextInput, Box, Button, Group, Card, Text } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { z } from "zod";
import { useForm, zodResolver } from "@mantine/form";
import { useContext } from "react";
import { OtpContext } from "../Signup/context.js";
import Submit from "../Button/Button.js";

const schema = z.object({
  userId: z.string(),
  otp: z.string(),
});

function Otp() {
  const { userId, setUserId } = useContext(OtpContext);
  let Navigate = useNavigate();

  async function otp(values) {
    console.log(values);
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
    <div style={{ width: 400, margin: "auto", marginTop: 100 }}>
      <Card shadow="xl">
        <Text size="xl" weight={600}>
          Email Verification
        </Text>
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

          <Group mt="xl" position="center">
            <Submit name="Submit" />
          </Group>
        </form>
      </Card>
    </div>
  );
}

export default Otp;
