import { Meta, StoryObj,} from '@storybook/react'
import { Form } from './Form'

const meta: Meta<typeof Form> = {
    component: Form
};

export default meta;

type Story = StoryObj<typeof Form>;

export const Default: Story = {
    // args: {
    //     options: [
    //         {label: 'Option1', value: 'option-1'},
    //         {label: 'Option2', value: 'option-2'},
    //         {label: 'Option3', value: 'option-3'},
    //     ],
    // }
};