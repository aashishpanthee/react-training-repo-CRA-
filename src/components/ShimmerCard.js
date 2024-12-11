const ShimmerCard = () => {
  return (
    <div className='w-64 h-[360px] bg-white rounded-lg shadow-md p-4 animate-pulse'>
      {/* Shimmer for image */}
      <div className='w-full h-40 mb-4 bg-gray-200 rounded-md'></div>

      {/* Shimmer for title */}
      <div className='w-3/4 h-4 mb-4 bg-gray-200 rounded'></div>

      {/* Shimmer for price */}
      <div className='w-1/4 h-6 mb-4 bg-gray-200 rounded'></div>

      {/* Shimmer for description */}
      <div className='space-y-2'>
        <div className='w-full h-3 bg-gray-200 rounded'></div>
        <div className='w-5/6 h-3 bg-gray-200 rounded'></div>
        <div className='w-3/4 h-3 bg-gray-200 rounded'></div>
      </div>

      {/* Shimmer for rating */}
      <div className='flex gap-2 mt-4'>
        <div className='w-1/4 h-4 bg-gray-200 rounded'></div>
        <div className='w-1/4 h-4 bg-gray-200 rounded'></div>
      </div>
    </div>
  );
};

export default ShimmerCard;
