import Tab from '../components/Tab/Tab';
import Login from './Login';
import Register from './Register';

const Onboarding = () => {
    const data = [
        {
            title: 'Login',
            content: <Login />,
        },
        {
            title: 'Register',
            content: <Register />,
        },
    ];

    return (
        <>
            <div>
                <Tab tabData={data} />
            </div>
        </>
    );
};

export default Onboarding;
