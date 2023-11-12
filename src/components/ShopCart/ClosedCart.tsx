import { useContext } from "react";
import styled from "styled-components";
import iconCart from "../assets/icons/Vector.svg";
import { CartContext } from "../../context/CartContext";

interface Props {
  setCart: React.Dispatch<React.SetStateAction<boolean>>;
}

export function ClosedCart({ setCart }: Props) {
  const {cart} = useContext(CartContext);

  const handleCart = (): void => {
    setCart(true);
  };

  return (
    <Wrapper onClick={handleCart}>
      <Cart src={iconCart} />
      <CountProducts>{cart.length == 0 ? 0 : cart.length}</CountProducts>
    </Wrapper>
  );
}


const Wrapper = styled.div`
  position: relative;
  background: #FFFFFF;
  border-radius: 8px;
  min-width: 90px;
  height: 45px;
  display: flex;
  gap: 20px;
  padding: 5px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  cursor: pointer;
`

const Cart = styled.img`
  width: 19.1px;
  height: 18px;
`;

const CountProducts = styled.h1`
  font-weight: 700;
  size: 18px;
  line-height: 21.97px;
`