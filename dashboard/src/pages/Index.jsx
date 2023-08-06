import Button from '../components/Button/Button';

const handleClick = () => {
    alert('Construction site');
};

function Index() {
    return (
        <div>
            <h1 className="text-3xl font-bold underline">
                Sensors Dashboard WIP!
            </h1>
            <div className="pt-2">
                <Button varient="primary" handleClick={handleClick}>
                    WIP
                </Button>
            </div>
        </div>
    );
}

export default Index;
