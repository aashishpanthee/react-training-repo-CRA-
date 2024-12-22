import { useState, useEffect } from 'react';
export const useProductCardDetail = (id) => {
  const [productDetail, setProductDetail] = useState(null);

  useEffect(() => {
    async function fetchApiProducts() {
      const data = await fetch('https://fakestoreapi.com/products/' + id);
      const productsData = await data.json();
      setProductDetail(productsData);
    }
    fetchApiProducts();
  }, [id]);
  return productDetail;
};
