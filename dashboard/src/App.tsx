import './App.css';
import Button from './components/Button/Button';

function App() {
    return (
        <div className="App">
            <h1 className=" text-3xl font-bold underline">
                Sensors Dashboard WIP!
            </h1>
            <div className="pt-2">
                <Button
                    varient="primary"
                    props={
                        (onclick = () =>
                            alert('This is an active construction site'))
                    }
                >
                    Primary
                </Button>
            </div>
        </div>
    );
}

export default App;
