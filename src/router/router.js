import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Error from '../components/Error';
import Body from '../components/Body';
import Contact from '../components/Contact';
import ProductCardDetail from '../components/ProductCardDetail';
import About1 from '../components/About1';
import { fetchUserProfile } from '../components/About1';
import About from '../components/About';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/about',
        element: <About />,
        // element: <About1 />,
        // loader: fetchUserProfile,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/products/:id',
        element: <ProductCardDetail />,
      },
    ],
  },
]);
export default router;
