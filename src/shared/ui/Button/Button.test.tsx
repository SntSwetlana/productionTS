import { render, screen } from '@testing-library/react';
import React from 'react';
import 'app/styles/index.scss';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

describe('Button', () => {
    test('test render Button', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });
    test('test clear theme', () => {
        render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
        screen.debug();
    });
});
