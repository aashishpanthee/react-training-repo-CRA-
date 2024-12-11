import { useRouteError, Link } from 'react-router-dom';

const Error = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='px-4 text-center'>
        <div className='mb-8'>
          <h1 className='font-bold text-gray-800 text-9xl'>404</h1>
          <div className='mt-4 animate-bounce'>
            <span className='text-6xl'>🙁</span>
          </div>
        </div>

        <h2 className='mb-4 text-2xl font-semibold text-gray-700 md:text-3xl'>
          Oops! Page Not Found
        </h2>

        <p className='mb-8 text-gray-600'>
          {error?.statusText ||
            error?.message ||
            "The page you're looking for doesn't exist or has been moved."}
        </p>

        <Link
          to='/'
          className='inline-block px-6 py-3 text-white transition-colors duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50'
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
