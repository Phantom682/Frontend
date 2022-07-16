import { z } from "zod";
import { useForm, zodResolver } from "@mantine/form";
import {
  TextInput,
  PasswordInput,
  Box,
  Select,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { OtpContext } from "./context.js";
import { useContext, useState } from "react";
import { DatePicker } from "@mantine/dates";
import { At, Lock } from "tabler-icons-react";

const schema = z.object({
  name: z.string().max(20, { message: "Name should have atmost 20 letters" }),
  surname: z.string().max(20, { message: "Name should have atmost 20 letters" }),
  email: z.string().email({ message: "Invalid email" }),
  birthDate: z.date(),
  gender: z.string(),
  password: z
    .string()
    .min(6, { message: "Password length should be min 6 characters" }),
});

function Signup() {
  let Navigate = useNavigate();
  const { userId, setUserId } = useContext(OtpContext);
  const [active, setActive] = useState(0);
  const nextStep = (n) =>
    setActive((current) => (current < 3 ? current + 1 : current));


  const form = useForm({
    schema: zodResolver(schema),
    initialValues: {
      name: "",
      surname: "",
      email: "",
      birthDate: "",
      gender: "",
      password: "",
    },
  });

  async function signUp(values) {
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
    setUserId({
      userId: data.data.userId,
    });
    Navigate("/otpvr", { replace: true });
  }

  return (
    
      <Box sx={{ maxWidth: 400 }} mx="auto">
        <form
          className="form"
          onSubmit={form.onSubmit((values) => signUp(values))}
        >
          <div className="row">
            <TextInput
              required
              className="input col-md-6"
              label="First Name"
              placeholder="Enter your First Name"
              mt="sm"
              {...form.getInputProps("name")}
            />
            <TextInput
              required
              className="input col-md-6"
              label="Last Name"
              placeholder="Enter your Last Name"
              {...form.getInputProps("surname")}
            />
          </div>
          <div className="row">
            <DatePicker
              placeholder="Birth Date"
              className="input col-md-6"
              label="Birth Date"
              {...form.getInputProps("birthDate")}
            />
            <Select
              searchable
              clearable
              label="Your Gender"
              placeholder="Pick one"
              className="input col-md-6"
              data={[
                { value: "male", label: "Male" },
                { value: "female", label: "Female" },
                { value: "transgender", label: "Transgender" },
              ]}
              {...form.getInputProps("gender")}
            />
          </div>

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
              required
              icon={<Lock size={19} />}
              label="Your password"
              className="input "
              placeholder="Your password"
              {...form.getInputProps("password")}
            />
          </div>
          

          {/* <Group position="center" mt="xl">
            <div className="flex items-center">
              <Button type="submit">Sign Up</Button>
            </div>
          </Group> */}
        </form>
      </Box>

  );
}

export default Signup;
