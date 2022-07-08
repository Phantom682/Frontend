import { TextInput, Button, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form';

function OTP() {
  const form = useForm({
    initialValues: {
      otp: '',
      
    },

   
  });

  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
          required
          label="Enter your OTP"
          onKeyPress={(event) => {
            if (!/[0-9]/.test(event.key)) {
              event.preventDefault();
            }
          }}
          {...form.getInputProps('otp')}
        />

        
        <Group position="center" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
}

export default OTP