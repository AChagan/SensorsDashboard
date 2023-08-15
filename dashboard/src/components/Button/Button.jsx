import './Button.css';

function Button(props) {
    const {
        variant = 'primary',
        isDisabled = false,
        type = 'button',
        handleClick,
        children,
        ...rest
    } = props;

    let buttonStyle = '';
    if (variant === 'primary') {
        buttonStyle = `cursor-pointer rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`;
    }

    return (
        <button
            disabled={isDisabled}
            type={type}
            className={buttonStyle}
            onClick={handleClick}
            {...rest}
        >
            {children}
        </button>
    );
}

export default Button;
