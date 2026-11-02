
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const [products, setProducts] = useState([]);

  const getProductsData = async () => {
    try {
      const response = await axios.get(
        `${backendUrl}/api/product/list`
      );

      if (response.data.success) {
        setProducts([...response.data.products].reverse());
      } else {
        toast.error(response.data.message || 'Failed to load products');
      }
    } catch (error) {
      console.error('Products fetch error:', error);
      toast.error('Unable to load products');
    }
  };

  useEffect(() => {
    getProductsData();
  }, []);

  const value = {
    products,
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
