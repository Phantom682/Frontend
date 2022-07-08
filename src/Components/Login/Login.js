import { z } from "zod";
import { useForm, zodResolver } from "@mantine/form";
import { PasswordInput, TextInput, Button, Box, Group } from "@mantine/core";
import "./Login.css";

const schema = z.object({
  username: z
    .string()
    .min(2, { message: "Name should have at least 2 letters" }),
  password: z.string().min(6, {
    message:
      "Password length should be min 6 characters and max 100 characters",
  }),
});

function Login() {

  const form = useForm({
    schema: zodResolver(schema),
    initialValues: {
      username: "",
      password: "",
    },
  });

  return (
    <Box sx={{ maxWidth: 340 }} mx="auto">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
          className="user"
          required
          label="Username"
          placeholder="Username"
          mt="sm"
          {...form.getInputProps("username")}
        />

        <PasswordInput
          placeholder="Password"
          label="Password"
          description="Password must include at least one letter, number and special character"
          required
          {...form.getInputProps("password")}
        />

        <div className="flex ">
          <input id="remember" type="checkbox" />
          <label for="remember">Remember</label>
          <a className="forgot " href="/">
            Forgot your password?
          </a>
        </div>

        <Group position="center" mt="xl">
          <Button className="btn" type="submit" >
            Submit
          </Button>
        </Group>

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

export default Login;
