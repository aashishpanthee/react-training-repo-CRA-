const FullPageSpinner = () => (
  <div className='fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-70'>
    <div className='w-24 h-24 border-t-4 border-blue-600 border-solid rounded-full animate-spin'></div>
    <div className='absolute inset-0 z-40 bg-transparent pointer-events-auto' />
  </div>
);

export default FullPageSpinner;
