import { useParams } from 'react-router-dom';
import { useProductCardDetail } from '../hooks/useProductCardDetail';

const ProductCardDetail = () => {
  const { id } = useParams();
  const productDetail = useProductCardDetail(id);

  if (!productDetail) {
    return <ProductCardDetailShimmer />;
  }

  const { title, price, description, category, image, rating } = productDetail;

  return (
    <div className='container px-4 py-8 mx-auto'>
      <div className='max-w-6xl mx-auto overflow-hidden bg-white rounded-lg shadow-lg'>
        <div className='md:flex'>
          {/* Product Image Section */}
          <div className='p-8 md:w-1/2'>
            <div className='flex items-center justify-center p-4 rounded-lg bg-gray-50'>
              <img
                src={image}
                alt={title}
                className='max-h-[400px] object-contain hover:scale-105 transition-transform duration-300'
              />
            </div>
          </div>

          {/* Product Details Section */}
          <div className='p-8 md:w-1/2'>
            <div className='mb-4'>
              <span className='text-sm font-medium tracking-wider text-blue-600 uppercase'>
                {category}
              </span>
            </div>

            <h1 className='mb-4 text-3xl font-bold text-gray-900'>{title}</h1>

            <div className='flex items-center mb-6'>
              <div className='flex items-center'>
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className={`w-5 h-5 ${
                      index < Math.floor(rating.rate)
                        ? 'text-yellow-400'
                        : 'text-gray-300'
                    }`}
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                  </svg>
                ))}
                <span className='ml-2 text-gray-600'>
                  ({rating.count} reviews)
                </span>
              </div>
            </div>

            <div className='mb-8'>
              <span className='text-4xl font-bold text-gray-900'>${price}</span>
            </div>

            <p className='mb-8 text-lg text-gray-600'>{description}</p>

            <div className='flex gap-4'>
              <button className='flex-1 px-6 py-3 font-semibold text-white transition-colors duration-200 bg-blue-600 rounded-lg hover:bg-blue-700'>
                Add to Cart
              </button>
              <button className='flex-1 px-6 py-3 font-semibold text-blue-600 transition-colors duration-200 border-2 border-blue-600 rounded-lg hover:bg-blue-50'>
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardDetail;

const ProductCardDetailShimmer = () => {
  return (
    <div className='container px-4 py-8 mx-auto'>
      <div className='max-w-6xl mx-auto overflow-hidden bg-white rounded-lg shadow-lg'>
        <div className='md:flex'>
          {/* Product Image Section Skeleton */}
          <div className='p-8 md:w-1/2'>
            <div className='flex items-center justify-center p-4 rounded-lg bg-gray-50'>
              <div className='w-full h-[400px] bg-gray-200 animate-pulse rounded-lg'></div>
            </div>
          </div>

          {/* Product Details Section Skeleton */}
          <div className='p-8 md:w-1/2'>
            <div className='mb-4'>
              <div className='w-24 h-6 bg-blue-200 rounded animate-pulse'></div>
            </div>

            <div className='mb-4'>
              <div className='w-3/4 h-8 bg-gray-200 rounded animate-pulse'></div>
            </div>

            <div className='flex items-center mb-6'>
              <div className='flex items-center'>
                {[...Array(5)].map((_, index) => (
                  <div
                    key={index}
                    className={`w-5 h-5 bg-gray-300 animate-pulse rounded-full ${
                      index < 3 ? 'bg-yellow-400' : 'bg-gray-300'
                    }`}
                  ></div>
                ))}
                <span className='w-24 h-4 ml-2 bg-gray-200 rounded animate-pulse'></span>
              </div>
            </div>

            <div className='mb-8'>
              <div className='w-40 h-8 bg-gray-200 rounded animate-pulse'></div>
            </div>

            <div className='mb-8'>
              <div className='w-full h-6 bg-gray-200 rounded animate-pulse'></div>
              <div className='w-full h-6 mt-4 bg-gray-200 rounded animate-pulse'></div>
            </div>

            <div className='flex gap-4'>
              <div className='w-full h-12 bg-blue-600 rounded animate-pulse'></div>
              <div className='w-full h-12 bg-blue-100 rounded animate-pulse'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
