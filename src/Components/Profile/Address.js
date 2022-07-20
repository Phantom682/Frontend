import { z } from "zod";
import React from "react";
import { useForm, zodResolver } from "@mantine/form";
import { TextInput, PasswordInput, Box, Select, Group } from "@mantine/core";
import Submit from "../Button/Button.js";
import { useNavigate } from "react-router-dom";
import { At } from "tabler-icons-react";
{/*import { OtpContext } from "./context.js";*/}



const schema = z.object({
  name: z.string().max(20, { message: "Name should have atmost 20 letters" }),
  surname: z
    .string()
    .max(20, { message: "Name should have atmost 20 letters" }),
  email: z.string().email({ message: "Invalid email" }),
  birthDate: z.date(),
  gender: z.string(),
  password: z
    .string()
    .min(6, { message: "Password length should be min 6 characters" }),
});

function Address(){
  let Navigate = useNavigate();
  

  const form = useForm({
    schema: zodResolver(schema),
    initialValues: {
      address: "",
      country: "",
      state: "",
      district: "",
      pincode: "",
     
    },
  });

  {/*async function signUp(values) {
    // console.log(values);
    const result = await fetch(
      process.env.REACT_APP_API_URL + "/user/create_user",
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
    setUserId({
      userId: data.data.userId,
    });
    nextStep(1);
  }*/

  return (
    <Box sx={{ maxWidth: 400 }} mx="auto">
      <form
        className="form"
        onSubmit={form.onSubmit((values) => console.log(values))}
      >
        <div className="row">
          <TextInput
            required
            className="input col-md-6"
            label="Address"
            placeholder="Enter your Address"
            mt="sm"
            {...form.getInputProps("address")}
          />
         
        </div>
        <Select
            searchable
            clearable
            required
            label="Country"
            placeholder="Pick one"
            className="input col-md-6"
            data={[
              { value: "male", label: "Male" },
              { value: "female", label: "Female" },
              { value: "transgender", label: "Transgender" },
            ]}
            {...form.getInputProps("gender")}
            />

<Select
            searchable
            clearable
            required
            label="State"
            placeholder="Pick one"
            className="input col-md-6"
            data={[
              { value: "male", label: "Male" },
              { value: "female", label: "Female" },
              { value: "transgender", label: "Transgender" },
            ]}
            {...form.getInputProps("gender")}
            />

<Select
            searchable
            clearable
            required
            label="District"
            placeholder="Pick one"
            className="input col-md-6"
            data={[
              { value: "male", label: "Male" },
              { value: "female", label: "Female" },
              { value: "transgender", label: "Transgender" },
            ]}
            {...form.getInputProps("gender")}
            />

<Select
            searchable
            clearable
            required
            label="City"
            placeholder="Pick one"
            className="input col-md-6"
            data={[
              { value: "male", label: "Male" },
              { value: "female", label: "Female" },
              { value: "transgender", label: "Transgender" },
            ]}
            {...form.getInputProps("gender")}
            />

        <div className="row">
          <TextInput
            required
            label="Pincode"
            className="input"
            type="number"

            {...form.getInputProps("pincode")}
          />
          
        </div>
        <Group mt="xl"  position="center">
          <Submit name="Submit"/>
        </Group>
      </form>
    </Box>
  );
}

}
export default Address;
