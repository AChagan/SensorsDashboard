import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/NavBar';

const Layout = () => {
    return (
        <>
            <Navbar />
            <div className="body">
                <Outlet />
            </div>
        </>
    );
};

export default Layout;
