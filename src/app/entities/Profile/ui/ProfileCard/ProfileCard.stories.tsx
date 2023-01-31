import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Country } from 'app/entities/Country';
import { Currency } from 'app/entities/Currency';
import Avatar from 'shared/assets/icons/PNGimage.png';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    data: {
        username: 'SntSwetlana',
        LastName: 'Aderikhina',
        age: 40,
        country: Country.USA,
        first: 'Svetlana',
        city: 'Los-Angeles',
        currency: Currency.USD,
        avatar: Avatar,
    },
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};

export const withErrors = Template.bind({});
withErrors.args = {
    error: 'true',
};
