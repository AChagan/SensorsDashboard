import Modal from './Modal';
import { useState } from 'react';

export default {
    title: 'Modal',
    component: Modal,
};

export const DefaultModal = () => {
    const [isVisible, setIsVisible] = useState(true);

    const handleModalSave = () => {
        setIsVisible(false);
    };

    const onClose = () => {
        setIsVisible(false);
    };

    return (
        <Modal
            isVisible={isVisible}
            onClose={onClose}
            title={'Action Modal'}
            handleClick={handleModalSave}
        >
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </Modal>
    );
};

export const InfoModal = () => {
    const [isVisible, setIsVisible] = useState(true);

    const onClose = () => {
        setIsVisible(false);
    };

    return (
        <Modal
            isVisible={isVisible}
            onClose={onClose}
            title={'Info Modal'}
            hasSaveButton={false}
            hasCloseButton={true}
        >
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </Modal>
    );
};
