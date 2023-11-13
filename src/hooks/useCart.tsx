import { useContext } from "react";
import { cartContext } from "../context/CartContext";

type Item = {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  createdAt: string;
  updateAt: string;
  quantity?:number;
}

export function useCart() {
  const { cart, setCart } = useContext(cartContext);

  const addedToCart = (item: Item): void => {
    const index = cart.findIndex((product) => product.id === item.id);

    if (index !== -1) {
      return
    } else {
      const newProduct = { ...item, quantity: 1 };
      setCart((previusProducts) => [...previusProducts, newProduct])
    }
  }

  const decreaseQuantity = (item: Item): void => {
    const update = cart.map((product) => {
      if (product.quantity === 1) {
        return { ...product };
      }

      if (product.id === item.id) {
        return { ...product, quantity: Math.max((product.quantity || 1) - 1, 0) }
      }

      return product;
    })
    setCart(update);
  }

  const incrementQuantity = (item: Item): void => {
    const updateCart = cart.map((product) => {
      if (product.id === item.id) {
        return { ...product, quantity: Math.max((product.quantity || 1) + 1, 0) }
      }
      return product;
    })
    setCart(updateCart);
  }

  const deleteWish = (item: Item): void => {
    const updateCart = cart.filter((product) => product.id !== item.id)
    setCart(updateCart);
  }
  
  return {addedToCart, decreaseQuantity, incrementQuantity, deleteWish}
}