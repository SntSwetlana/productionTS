import { Story } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

// @ts-ignore
export const RouterDecorator = (story: () => Story) => (
    <BrowserRouter>
        <>{story()}</>
    </BrowserRouter>
);
