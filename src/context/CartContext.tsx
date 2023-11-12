import { createContext, useState, ReactNode } from "react";

type Product = {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  createdAt: string;
  updateAt: string;
}

type CartContext = {
  cart: Product[];
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
}

type CartContextProviderProps = {
  children: ReactNode;
};

export const CartContext = createContext<CartContext>({} as CartContext);

export const CartContextProvider: React.FC<CartContextProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};