import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
import { ToastContextProvider } from './context/ToastContext';

import Index from './pages/Index';
import Layout from './pages/Layout';
import PageNotFound from './pages/PageNotFound';
import About from './pages/About';
import Onboarding from './pages/Onboarding';
import Login from './pages/Login';

function App() {
    return (
        <BrowserRouter>
            <ToastContextProvider>
                <Provider store={store}>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<Index />} />
                            <Route path="/about" element={<About />} />
                            <Route
                                path="/onboarding"
                                element={<Onboarding />}
                            />
                            <Route path="/login" element={<Login />} />
                            <Route path="*" element={<PageNotFound />} />
                        </Route>
                    </Routes>
                </Provider>
            </ToastContextProvider>
        </BrowserRouter>
    );
}

export default App;
