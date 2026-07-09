import VSkeleton from './VSkeleton.vue';

const meta: Meta<typeof VSkeleton> = {
    title: 'Components/Base/VSkeleton',
    component: VSkeleton,
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
        class: 'w-32 h-8',
    },
};

export const Square: Story = {
    name: 'Square',
    args: {
        class: 'w-16 h-16',
    },
};

export const Rectangle: Story = {
    name: 'Rectangle',
    args: {
        class: 'w-full h-24',
    },
};
