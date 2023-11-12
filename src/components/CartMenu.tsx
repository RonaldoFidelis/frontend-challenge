import { useState } from "react";
import styled from "styled-components";
import iconCart from "../assets/icons/Vector.svg";

export function CartMenu() {
  const [countItemInCart, setCountCart] = useState<number | null>(null);

  return (
    <WrapperCart>
      <CartIcon as={iconCart} />
    </WrapperCart>
  );
}


const WrapperCart = styled.div`
  background: #FFFFFF;
  border-radius: 8px;
  min-width: 90px;
  height: 45px;
  display: flex;
  gap: 10px;
  padding: 5px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`

const CartIcon = styled(iconCart)`
  width: 19.1px;
  height: 18px;
  /* Adicione mais estilos conforme necessário */
`;
