import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes.jsx';
import { Base } from './pages/Base/index.jsx';

export const Main = () => {
    return (
        <StrictMode>
            <RouterProvider router={router}>
                <Base />
            </RouterProvider>
        </StrictMode>
    );
};

createRoot(document.getElementById('root')).render(<Main />);
