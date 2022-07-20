import { useForm } from "@mantine/form";
import { PasswordInput, Group, Button, Box, Card, Text, SimpleGrid } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import React from "react";
import "./forget.css";
import Submit from "../Button/Button.js";

function ResetPassword() {
  let Navigate = useNavigate();
  const form = useForm({
    initialValues: {
      password: "",
      confirmPassword: "",
    },

    validate: {
      confirmPassword: (value, values) =>
        value !== values.password ? "Passwords did not match" : null,
    },
  });

  async function resetPassword(values) {
    // console.log(values);
    const result = await fetch(
      process.env.REACT_APP_API_URL + "/user/resetPassword",
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
    // console.log(data);
    Navigate("/login", { replace: true });
  }

  return (
    <>

      <form onSubmit={form.onSubmit((values) => resetPassword(values))}>
        <SimpleGrid cols={1}>
          <PasswordInput
            label="Password"
            className="input"
            placeholder="Password"
            {...form.getInputProps("password")}
          />

          <PasswordInput
            mt="sm"
            label="Confirm password"
            className="input"
            placeholder="Confirm password"
            {...form.getInputProps("confirmPassword")}
          />
        </SimpleGrid>

        <Group mt="xl" position="center">
          <Submit name="Reset" />
        </Group>
      </form>
    </>
  );
}

export default ResetPassword;
