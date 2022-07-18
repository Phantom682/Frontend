import { z } from 'zod';
import { useForm, zodResolver } from '@mantine/form';
import { NumberInput, TextInput, Box } from '@mantine/core';
import { PasswordInput } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import React from 'react';

const schema = z.object({
  name: z.string().max(20, { message: 'Name should have atmost 20 letters' }),
  email: z.string().email({ message: 'Invalid email' }),
  age: z.number().min(18, { message: 'You must be at least 18 to create an account' }),
  username: z.string().min(6, { message: 'Invalid Username' }),
  password: z.string().min(6, { message: 'Password length should be min 6 characters' }),

});

function Profile() {
  let Navigate = useNavigate()
  
  async function signUp(values) {
   
    console.log(values);
    const result = await fetch('http://localhost:5000/user/create_user', {
      
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": 'application/json',
        "Accept": 'application/json',

      }
    })
    const data = await result.json();
    console.log(data);
    
    Navigate ("/otpvr",{replace:true})
  }


  const form = useForm({
    schema: zodResolver(schema),
    initialValues: {
      name: '',
      surname: '',
      email: '',
      age: 18,
      username: '',
      password: '',
    },
  });
  

  return (
    <Box className="form" sx={{ maxWidth: 340 }} mx="auto">
      <form onSubmit={form.onSubmit((values) => signUp(values))}>
      <TextInput
            required
            label="Name"
            placeholder="Enter your Name"
            mt="sm"
            {...form.getInputProps('name')}
          />
          <TextInput
            required
            label="Surname"
            placeholder="Enter your Surname"
            {...form.getInputProps('surname')}
          />
          <NumberInput
            required
            label="Age"
            placeholder="Your age"
            mt="sm"
            {...form.getInputProps('age')}
          />
          <TextInput
            required
            label="Email"
            placeholder="Enter your Email"
            {...form.getInputProps('email')}
          />
          <TextInput
            required
            label="Username"
            placeholder='Enter your username'
            {...form.getInputProps('username')}
          />
          <PasswordInput
            required
            label="Your password" placeholder="Your password"
            {...form.getInputProps('password')}
          />
       
      </form>

    </Box>

  );
}

export default Profile;