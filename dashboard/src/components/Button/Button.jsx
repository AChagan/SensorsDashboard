import './Button.css';

function Button(props) {
    const { variant = 'primary', handleClick, children, ...rest } = props;

    return (
        <button className={`button ${variant}`} onClick={handleClick} {...rest}>
            {children}
        </button>
    );
}

export default Button;
