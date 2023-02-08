import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Orange } from 'shared/ui/Skeleton/Skeleton.stories';
import { Code } from './Code';

export default {
    title: 'shared/Code',
    component: Code,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const NormalCode = Template.bind({});
NormalCode.args = {
    text: 'import React from \'react\';\n'
        + 'import { ComponentStory, ComponentMeta } from \'@storybook/react\';\n'
        + 'import { code } from \'./code\';\n'
        + '\n'
        + 'export default {\n'
        + '    title: \'shared/code\',\n'
        + '    component: code,\n'
        + '    argTypes: {\n'
        + '        backgroundColor: { control: \'color\' },\n'
        + '    },\n'
        + '} as ComponentMeta<typeof code>;\n'
        + '\n'
        + 'const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;\n',
};

export const DarkCode = Template.bind({});
DarkCode.args = {
    text: 'import React from \'react\';\n'
        + 'import { ComponentStory, ComponentMeta } from \'@storybook/react\';\n'
        + 'import { code } from \'./code\';\n'
        + '\n'
        + 'export default {\n'
        + '    title: \'shared/code\',\n'
        + '    component: code,\n'
        + '    argTypes: {\n'
        + '        backgroundColor: { control: \'color\' },\n'
        + '    },\n'
        + '} as ComponentMeta<typeof code>;\n'
        + '\n'
        + 'const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;\n',
};
DarkCode.decorators = [ThemeDecorator(Theme.DARK)];

export const OrangeCode = Template.bind({});
OrangeCode.args = {
    text: 'import React from \'react\';\n'
        + 'import { ComponentStory, ComponentMeta } from \'@storybook/react\';\n'
        + 'import { code } from \'./code\';\n'
        + '\n'
        + 'export default {\n'
        + '    title: \'shared/code\',\n'
        + '    component: code,\n'
        + '    argTypes: {\n'
        + '        backgroundColor: { control: \'color\' },\n'
        + '    },\n'
        + '} as ComponentMeta<typeof code>;\n'
        + '\n'
        + 'const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;\n',
};
OrangeCode.decorators = [ThemeDecorator(Theme.ORANGE)];
