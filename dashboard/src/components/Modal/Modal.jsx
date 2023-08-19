import Button from '../Button/Button';

function Modal(props) {
    const {
        isVisible = false,
        title,
        handleClick,
        onClose,
        children,
        hasCloseButton = true,
        hasSaveButton = true,
        ...rest
    } = props;

    if (!isVisible) {
        return null;
    }

    const onOutsideClick = () => {
        onClose && onClose();
    };

    const stopPropagation = (e) => {
        e && e.stopPropagation();
    };

    return (
        <>
            <div
                onClick={onOutsideClick}
                className="bg-black bg-opacity-75 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div
                    className="w-3/4 my-6 mx-auto max-w-3xl"
                    onClick={stopPropagation}
                >
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div className=" p-4 border-b border-solid border-slate-200 rounded-t">
                            <h3 className="text-center text-3xl items-center font-semibold">
                                {title}
                            </h3>
                        </div>
                        <div className="relative p-6 flex-auto text-center">
                            {children}
                        </div>
                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                            {hasCloseButton ? (
                                <>
                                    <Button
                                        variant={'danger'}
                                        handleClick={onClose}
                                    >
                                        Close
                                    </Button>
                                </>
                            ) : null}
                            {hasSaveButton ? (
                                <>
                                    <Button
                                        variant={'primary'}
                                        handleClick={handleClick}
                                    >
                                        Save
                                    </Button>
                                </>
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Modal;
