import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import About from '../components/About';
import Error from '../components/Error';
import Body from '../components/Body';
import Contact from '../components/Contact';
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
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
]);
export default router;
