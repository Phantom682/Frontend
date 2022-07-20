import { useForm } from "@mantine/form";
import { PasswordInput, Group, Button, Box, Card, Text } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import React from "react";
import Submit from "../Button/Button.js";
import { OtpContext } from "../Signup/context.js";
import { useContext } from "react";

function ResetPassword() {
  const { userId, setUserId } = useContext(OtpContext);
  let Navigate = useNavigate();
  const form = useForm({
    initialValues: {
      newPass: "",
      confirmPassword: "",
      userId: userId.userId
    },

    validate: {
      confirmPassword: (value, values) =>
        value !== values.newPass ? "Passwords did not match" : null,
    },
  });

  async function resetPassword(values) {
    console.log(values);
    const result = await fetch(
      process.env.REACT_APP_API_URL + "/user/resetPassword",
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
    console.log(data);
    Navigate("/login", { replace: true });
  }

  return (
    <div style={{ width: 340, margin: "auto" }}>
      <Card shadow="xl">
        <Text size="lg" weight={500}>
          User Login
        </Text>
        <form onSubmit={form.onSubmit((values) => resetPassword(values))}>
          <PasswordInput
            label="Password"
            placeholder="Password"
            {...form.getInputProps("newPass")}
          />

          <PasswordInput
            mt="sm"
            label="Confirm password"
            placeholder="Confirm password"
            {...form.getInputProps("confirmPassword")}
          />

          <Group mt="xl" position="center">
            <Submit name="Reset" />
          </Group>
        </form>
      </Card>
    </div>
  );
}

export default ResetPassword;
