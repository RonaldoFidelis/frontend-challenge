import styled from "styled-components";
import { useState } from "react";
import { OpenCart } from "./OpenCart"; 
import { CloseCart } from "./ClosedCart"; 

export function CartControl() {
  const [cart, setCart] = useState<boolean>(false);

  return (
    <Wrapper>
      {cart ? (
        <OpenCart setCart={setCart} /> 
      ) : (
        <CloseCart setCart={setCart} /> 
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
`