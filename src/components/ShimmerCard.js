const ShimmerCard = () => {
  return (
    <div className="w-64 h-[360px] bg-white rounded-lg shadow-md p-4 animate-pulse">
      {/* Shimmer for image */}
      <div className="w-full h-40 bg-gray-200 rounded-md mb-4"></div>
      
      {/* Shimmer for title */}
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
      
      {/* Shimmer for price */}
      <div className="h-6 bg-gray-200 rounded w-1/4 mb-4"></div>
      
      {/* Shimmer for description */}
      <div className="space-y-2">
        <div className="h-3 bg-gray-200 rounded w-full"></div>
        <div className="h-3 bg-gray-200 rounded w-5/6"></div>
        <div className="h-3 bg-gray-200 rounded w-3/4"></div>
      </div>
      
      {/* Shimmer for rating */}
      <div className="flex gap-2 mt-4">
        <div className="h-4 bg-gray-200 rounded w-1/4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/4"></div>
      </div>
    </div>
  );
};

export default ShimmerCard; 