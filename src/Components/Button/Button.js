import { Button } from "@mantine/core";
import React from 'react';

function Submit(props) {
  const name = props.name;
  const color = props.color;
  const type = props.type;

  return (
    <Button fullWidth type="submit">
      {name}
    </Button>
  );
}

export default Submit;
