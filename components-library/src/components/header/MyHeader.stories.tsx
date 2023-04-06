import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Header } from './Header';
import {DefaultHeaderV1Props} from "../../defaults/header/v1"

export default {
  title: 'myHeader',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;
export const myHeader = Template.bind({});
myHeader.args = DefaultHeaderV1Props;

