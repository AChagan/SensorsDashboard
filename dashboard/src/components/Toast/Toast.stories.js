import Toast from './Toast';
import { useToast } from '../../hooks/useToast';

export default {
    title: 'Toast',
    component: Toast,
};

export const Success = () => {
    return (
        <Toast
            message={'success'}
            type={'success'}
            isAutoRemoved={false}
        ></Toast>
    );
};

export const Info = () => {
    return <Toast message={'info'} type={'info'} isAutoRemoved={false}></Toast>;
};

export const Warning = () => {
    return (
        <Toast
            message={'warning'}
            type={'warning'}
            isAutoRemoved={false}
        ></Toast>
    );
};

export const Error = () => {
    return (
        <Toast message={'error'} type={'error'} isAutoRemoved={false}></Toast>
    );
};
