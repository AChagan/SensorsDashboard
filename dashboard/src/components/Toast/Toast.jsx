import { useEffect, useRef, useState } from 'react';

import {
    CheckIcon,
    XCircleIcon,
    ExclamationTriangleIcon,
    ExclamationCircleIcon,
    XMarkIcon,
} from '@heroicons/react/24/solid';
import './Toast.css';

import { useToast } from '../../hooks/useToast';

const toastTypes = {
    success: {
        icon: <CheckIcon />,
        iconClass: 'success-icon',
        progressBarClass: 'success',
    },
    warning: {
        icon: <ExclamationTriangleIcon />,
        iconClass: 'warning-icon',
        progressBarClass: 'warning',
    },
    info: {
        icon: <ExclamationCircleIcon />,
        iconClass: 'info-icon',
        progressBarClass: 'info',
    },
    error: {
        icon: <XCircleIcon />,
        iconClass: 'error-icon',
        progressBarClass: 'error',
    },
};

const Toast = ({ message, type, id }) => {
    const { icon, iconClass, progressBarClass } = toastTypes[type];
    const [dismissed, setDismissed] = useState(false);

    const timerID = useRef(null);

    const toast = useToast();

    const handleDismiss = () => {
        setDismissed(true);
        setTimeout(() => {
            toast.remove(id);
        }, 400);
    };

    useEffect(() => {
        timerID.current = setTimeout(() => {
            handleDismiss();
        }, 4000);

        return () => {
            clearTimeout(timerID.current);
        };
    }, []);

    return (
        <div className={`toast ${dismissed ? 'toast-dismissed' : ''}`}>
            <span className={iconClass}>{icon}</span>
            <p className="toast-message">{message}</p>
            <button className="dismiss-btn" onClick={handleDismiss}>
                <XMarkIcon size={18} color="#aeb0d7" />
            </button>
            <div className="toast-progress">
                <div className={`toast-progress-bar ${progressBarClass}`}></div>
            </div>
        </div>
    );
};

export default Toast;
