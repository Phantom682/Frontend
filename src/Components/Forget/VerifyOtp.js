import { TextInput, Box, Button, Group, Card } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import React from "react";
import Submit from "../Button/Button.js";
import { z } from "zod";
import { useForm, zodResolver } from "@mantine/form";
import { useContext } from "react";
import { OtpContext } from "../Signup/context.js";

const schema = z.object({
  userId: z.string(),
  otp: z.string(),
});

function VerifyOtp() {
  const { userId, setUserId } = useContext(OtpContext);
  let Navigate = useNavigate();
  async function verifyOtp(values) {
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
          <form onSubmit={form.onSubmit((values) => verifyOtp(values))}>
            <TextInput
              required
              label="Enter your OTP"
              className="input col-xl-11"
              placeholder="Enter Otp"
              type="number"
              {...form.getInputProps("otp")}
            />

            <Group mt="xl" position="center">
              <Submit name="Submit" />
            </Group>
          </form>
        </Box>
      </Card>
    </div>
  );
}

export default VerifyOtp;
