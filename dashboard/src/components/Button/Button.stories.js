import Button from './Button';

export default {
    title: 'Button',
    component: Button,
};

export const Primary = () => <Button variant="primary">Primary</Button>;
export const Danger = () => <Button variant="danger">Danger</Button>;
