import Toast from './Toast';
import './ToastsContainer.css';

function ToastsContainer(props) {
    const { toasts } = props;

    return (
        <div className="toasts-container bottom-right">
            {toasts.map((toast) => (
                <Toast key={toast.id} {...toast} />
            ))}
        </div>
    );
}

export default ToastsContainer;
