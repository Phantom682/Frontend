import { z } from "zod";
import { useForm, zodResolver } from "@mantine/form";
import {
  Checkbox,
  Text,
  PasswordInput,
  TextInput,
  Box,
  Group,
  Button,
} from "@mantine/core";
import { At, Lock } from "tabler-icons-react";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  email: z
    .string()
    .min(2, { message: "Name should have at least 2 letters" }),
  password: z.string().min(6, {
    message:
      "Password length should be min 6 characters and max 100 characters",
  }),
});

function Login() {
  let Navigate = useNavigate();

  const form = useForm({
    schema: zodResolver(schema),
    initialValues: {
      email: "",
      password: "",
    },
  });

  async function login(values) {
    console.log(values);
    document.getElementById("nextbtn").click();

    const result = await fetch("http://localhost:5000/user/login_user", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const data = await result.json();
    console.log(data);
    Navigate("/login", { replace: true });
  }

  return (
    <Box sx={{ maxWidth: 340 }} mx="auto">
      <form onSubmit={form.onSubmit((values) => login(values))}>
        <div className="row">
          <TextInput
            required
            icon={<At size={19} />}
            label="Email"
            className="input"
            placeholder="your@email.com"
            {...form.getInputProps("email")}
          />

          <PasswordInput
            placeholder="Password"
            icon={<Lock size={19} />}
            label="Password"
            className="input"
            required
            {...form.getInputProps("password")}
          />
        </div>
        <br />
        <div className="row">
          <Checkbox className="col" label="Remember" radius="xs" size="xs" />
          <Text className="col" size="xs" align="right" variant="link">
            Forgot your password?
          </Text>
        </div>

        <Group position="center" mt="xl">
          <Button fullWidth type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
}

export default Login;
