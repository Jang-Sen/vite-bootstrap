import { createBrowserRouter } from 'react-router-dom';
import Main from '../pages/Main.tsx';
import ProductList from '../pages/product/ProductList.tsx';
import ProductDetail from '../pages/product/ProductDetail.tsx';
import ErrorPage from '../pages/ErrorPage.tsx';
import App from '../App.tsx';
import CreateProduct from '../pages/product/CreateProduct.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        path: '/',
        element: <Main />,
      },
      {
        path: '/product',
        element: <ProductList />,
      },
      {
        path: '/product/:productId',
        element: <ProductDetail />,
      },
      {
        path: '/product/create',
        element: <CreateProduct />,
      },
    ],
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]);

export default router;
