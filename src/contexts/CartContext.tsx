import { createContext, ReactNode, useEffect, useState } from 'react';
import { formatMoneyToBRL } from '../utils/intl';

interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  formattedPrice: string;
  defaultPriceId: string;
}

interface CartContextProps {
  products: Product[];
  totalValue: string;
  addProductToCart: (product: Product) => void;
  removeProductFromCart: (productId: string) => void;
}

export const CartContext = createContext({} as CartContextProps);

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [totalValue, setTotalValue] = useState(formatMoneyToBRL(0));

  useEffect(() => {
    const total = products.reduce((acc, p) => acc + p.price, 0);
    setTotalValue(formatMoneyToBRL(total));
  }, [products]);

  function addProductToCart(product: Product) {
    const alreadyExists = products.find((p) => p.id === product.id);
    if (alreadyExists) return;

    setProducts((state) => [...state, product]);
  }

  function removeProductFromCart(productId: string) {
    const productIndex = products.findIndex((p) => p.id === productId);
    if (productIndex === -1) return;

    setProducts((state) => {
      const newProducts = [...state];
      newProducts.splice(productIndex, 1);
      return newProducts;
    });
  }

  return (
    <CartContext.Provider value={{ products, totalValue, addProductToCart, removeProductFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
