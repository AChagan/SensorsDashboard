function Card(props) {
    const { title, handleClick, children, ...rest } = props;

    return (
        <div className="max-w rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-center text-blue-500">
                    {title}
                </div>
                <div className="text-center">{children}</div>
            </div>
        </div>
    );
}

export default Card;
