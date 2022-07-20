import { Tabs } from '@mantine/core';
import { Photo, MessageCircle, } from 'tabler-icons-react';
import Address from './Address.js';
import Basic from './Basic.js';

function profile() {
  return (
    <Tabs  position="center">
      <Tabs.Tab label="Basic Details"  icon={<Photo size={14} />}><Basic/></Tabs.Tab>
      <Tabs.Tab label="Address Details"  icon={<MessageCircle size={14} />}><Address/></Tabs.Tab>

    </Tabs>
  );
}
export default profile;