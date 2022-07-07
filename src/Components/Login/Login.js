import { z } from "zod";
import { useForm, zodResolver } from "@mantine/form";
import { TextInput, Button, Box } from "@mantine/core";
import PasswordRequirement from "./password.js";
import "./Login.css";
import React, { useState } from "react";

const schema = z.object({
  username: z.string().min(2, {
    message:
      "Password length should be min 6 characters and max 100 characters",
  }),
  password: z.string().min(6, {
    message:
      "Password length should be min 6 characters and max 100 characters",
  }),
});

function Demo() {
  //   const [username, setUsername] = useState();
  //   const [password, setPassword] = useState();

  const form = useForm({
    schema: zodResolver(schema),
    initialValues: {
      username: "",
      password: "",
    },
  });

  async function login(values) {
    console.log(values);
    const result = await fetch("http://localhost:5000/user/create_user", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const data = await result.json();
    console.log(data);
  }

  return (
    <Box className="form" sx={{ maxWidth: 350 }} mx="auto">
      <form onSubmit={form.onSubmit((values) => alert(values))}>
        <TextInput
          className="user"
          required
          label="Username"
          placeholder="Username"
          //   onChange={(event) => {
          //     setUsername(event.target.value);
          //   }}
          {...form.getInputProps("username")}
        />

        <PasswordRequirement {...form.getInputProps("password")} />

        <div className="flex ">
          <input id="remember" type="checkbox" />
          <label for="remember">Remember</label>
          <a className="forgot " href="/">
            Forgot your password?
          </a>
        </div>

        <Button className="btn" type="submit" >
          Submit
        </Button>

        <p className="para">
          Don't have an account?
          <a href="/" className="reg">
            Register here
          </a>
        </p>
      </form>
    </Box>
  );
}
export default Demo
