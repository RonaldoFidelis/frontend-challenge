import { useState } from "react";
import styled from "styled-components";
import iconCart from "../assets/icons/Vector.svg";

export function CartNavbar() {
  const [countItemInCart, setCountCart] = useState<number | null>(null);

  return (
    <Wrapper>
      <Cart src={iconCart} />
      <CountProducts>{countItemInCart ? countItemInCart : 0}</CountProducts>
    </Wrapper>
  );
}

const Wrapper = styled.div`
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