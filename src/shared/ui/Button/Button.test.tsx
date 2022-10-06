import { render, screen } from '@testing-library/react';
import React from 'react';
import 'app/styles/index.scss';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

describe('Button', () => {
    test('test render Button', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
        screen.debug();
    });
    test('test clear theme', () => {
        render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
        screen.debug();
    });
});
