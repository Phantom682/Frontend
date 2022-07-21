import { TextInput, Group, Card, Text, SimpleGrid } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import React from "react";
import Submit from "../Button/Button.js";
import { z } from "zod";
import { useForm, zodResolver } from "@mantine/form";
import { useContext } from "react";
import { OtpContext } from "../Signup/context.js";
import "../Signup/Signup.css"
const schema = z.object({
  userId: z.string(),
  otp: z.string(),
});

function VerifyOtp({ nextStep }) {
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
    // console.log(data);
    nextStep(1);
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
    <>
      <div style={{ width: 340, margin: 'auto', marginTop:"1%" }}>
        <Card shadow="sm" p="lg">
        <Text size="xl"  align= "center" weight={600}>
            Verify Email
          </Text>
          <form onSubmit={form.onSubmit((values) => verifyOtp(values))}>
          <div style={{ marginTop: 10 }}>
          <SimpleGrid cols={1}>
            <TextInput
              required
              label="Enter your OTP"
              className="input"
              placeholder="Enter Otp"
              type="number"
              {...form.getInputProps("otp")}
            />
             </SimpleGrid>

            <Group mt="xl" position="center">
              <Submit name="Submit" />
            </Group>
            </div>
          </form>
        </Card>
      </div>
    </>
  );
}

export default VerifyOtp;
