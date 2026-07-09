import VSpinner from './VSpinner.vue';

const meta: Meta<typeof VSpinner> = {
    title: 'Components/Base/VSpinner',
    component: VSpinner,
};

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
    name: 'Default',
    args: {
        class: '',
    },
};

export const Large: Story = {
    name: 'Large',
    args: {
        class: 'text-2xl',
    },
};
