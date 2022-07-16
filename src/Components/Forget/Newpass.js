import { useForm } from '@mantine/form';
import { PasswordInput, Group, Button, Box } from '@mantine/core';
import { useNavigate } from "react-router-dom";

function Newpass() {
  let Navigate = useNavigate();
  const form = useForm({
    initialValues: {
      password: '',
      confirmPassword: '',
    },

    validate: {
      confirmPassword: (value, values) =>
        value !== values.password ? 'Passwords did not match' : null,
    },
  });

  async function Newpass(values) {
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
    Navigate("/login", { replace: true });
  }

  return (
    <Box sx={{ maxWidth: 340 }} mx="auto">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <PasswordInput
          label="Password"
          placeholder="Password"
          {...form.getInputProps('password')}
        />

        <PasswordInput
          mt="sm"
          label="Confirm password"
          placeholder="Confirm password"
          {...form.getInputProps('confirmPassword')}
        />

        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
}

export default Newpass;