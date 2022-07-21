import { TextInput, SimpleGrid, Group, Card, Text } from "@mantine/core";
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

function VerifyEmail({ nextStep }) {
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
    nextStep(1);
  }

  const form = useForm({
    schema: zodResolver(schema),
    initialValues: {
      email: "",
    },
  });

  return (

    <div style={{ width: 300, margin: 'auto', marginTop: "1%" }}>
      <Card shadow="sm" p="lg">
        <Text size="xl" align="center" weight={600}>
          Enter Your Email
        </Text>
        <form onSubmit={form.onSubmit((values) => verifyEmail(values))}>
          <div style={{ marginTop: 10 }}>
          <SimpleGrid cols={1}>
            <TextInput
              required
              icon={<At size={19} />}
              label="Email"
              className="input"
              placeholder="your@email.com"
              {...form.getInputProps("email")}
            />
            </SimpleGrid>

            <Group mt="xl" position="center">
              <Submit name="Generate Otp" />
            </Group>
          </div>

        </form>
      </Card>
    </div>

  );
}

export default VerifyEmail;
