import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { CommentList } from './CommentList';

export default {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    comments: [
        {
            id: '1',
            text: 'hello world',
            user: { id: '1', username: 'Alyna' },
        },
        {
            id: '2',
            text: 'you are the best',
            user: { id: '1', username: 'Sonia' },
        },
    ],
};
Normal.decorators = [
    StoreDecorator({}),
];

export const Loading = Template.bind({});
Loading.args = {
    comments: [],
    isLoading: true,
};
