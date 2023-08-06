import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Index from './pages/Index';
import Layout from './pages/Layout';
import PageNotFound from './pages/PageNotFound';
import About from './pages/About';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Index />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<PageNotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
