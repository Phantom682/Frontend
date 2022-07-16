import { TextInput, Box, Button, Group, Card } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import React from "react";
import { z } from "zod";
import { useForm, zodResolver } from "@mantine/form";
import { At } from "tabler-icons-react";

const schema = z.object({
  email: z.string(),
});

function Vemail() {

  let Navigate = useNavigate();
  async function vemail(values) {
    console.log(values);
    
    const result = await fetch("http://localhost:5000/user/verifyOTP", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const data = await result.json();
    console.log(data);
    Navigate("/otpvr", { replace: true });
  }
 
  const form = useForm({
    schema: zodResolver(schema),
    initialValues: {
      email: "",
    },
  });

  return (
    <Card style={{ width: 400, margin: "auto" }} shadow="xl">
    <Box >
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
          required
          icon={<At size={19} />}
          label="Email"
          className="input"
          placeholder="your@email.com"
          {...form.getInputProps("email")}
        />

        <Button fullWidth type="submit">
          Submit
        </Button>
      </form>
    </Box>
    </Card>
  );
}

export default Vemail;
