import { Tabs } from '@mantine/core';
import { AddressBook, ListDetails } from 'tabler-icons-react';
import Address from './Address.js';
import Basic from './Basic.js';
import * as React from 'react';

function profile() {
  return (

    <Tabs position="center" tabPadding="lg">
      <Tabs.Tab label="Basic Details" icon={< ListDetails size={14} />}><Basic /></Tabs.Tab>
      <Tabs.Tab label="Address Details" icon={<AddressBook size={14} />}><Address /></Tabs.Tab>

    </Tabs>

  );
}
export default profile;