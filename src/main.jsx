import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Shop from './components/shop/Shop.jsx';
import Home from './components/home/Home.jsx';
import ProductDetails from './components/productDetails/ProductDetails.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Basket from './components/basket/Basket.jsx';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: 'shop', element: <Shop /> },
      { path: 'product/:productIdStr', element: <ProductDetails /> },
      { path: 'basket', element: <Basket /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
