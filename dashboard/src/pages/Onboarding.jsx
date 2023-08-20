import Tab from '../components/Tab/Tab';
import Login from './Login';

const Onboarding = () => {
    const data = [
        {
            title: 'Login',
            content: <Login />,
        },
        {
            title: 'Register',
            content: 'WIP',
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
