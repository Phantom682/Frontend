import { TextInput, Box, Button, Group, Card } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import React from "react";
import { z } from "zod";
import { useForm, zodResolver } from "@mantine/form";
import { At } from "tabler-icons-react";
import { OtpContext } from "../Signup/context.js";
import { useContext } from "react";
import Submit from "../Button/Button.js";

const schema = z.object({
  email: z.string(),
});

function VerifyEmail() {
  let Navigate = useNavigate();
  const { userId, setUserId } = useContext(OtpContext);

  async function verifyEmail(values) {
    console.log(values);
    const result = await fetch(
      process.env.REACT_APP_API_URL + "/user/forgotPassword",
      {
        method: "PUT",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    const data = await result.json();
    setUserId({
      userId: data.data.userId,
    });
    Navigate("/votp", { replace: true });
  }

  const form = useForm({
    schema: zodResolver(schema),
    initialValues: {
      email: "",
    },
  });

  return (
    <div style={{ width: 400, margin: "auto" }}>
      <Card shadow="xl">
        <Box>
          <form onSubmit={form.onSubmit((values) => verifyEmail(values))}>
            <TextInput
              required
              icon={<At size={19} />}
              label="Email"
              className="input"
              placeholder="your@email.com"
              {...form.getInputProps("email")}
            />

            <Group mt="xl" position="center">
              <Submit name="Generate Otp" />
            </Group>
          </form>
        </Box>
      </Card>
    </div>
  );
}

export default VerifyEmail;
