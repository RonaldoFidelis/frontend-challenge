import { useContext, useEffect, useState } from "react";
import { cartContext } from "../../context/CartContext";
import { InCart } from "../CardProducts/InCart";
import styled from "styled-components";
import icon from "../../assets/icons/Close_cart.png";

interface Props {
  setCart: React.Dispatch<React.SetStateAction<boolean>>;
}

export function OpenCart({ setCart }: Props) {
  const { cart } = useContext(cartContext);
  const [totalAmount, setTotalAmount] = useState<number>(0);

  const handleCart = (): void => {
    setCart(false);
  };

  useEffect(() => {
    const calculateTotal = (): void => {
      const sum: number = cart.reduce((ac, item) => ac += (Number(item.price) * item.quantity), 0);
      setTotalAmount(sum);
    };

    calculateTotal();
  }, [cart]);

  console.log(cart);

  return (
    <Aside>
      <Header>
        <Title>Carrinho de compras</Title>
        <CloseMenu onClick={handleCart}>
          <IconClose src={icon} alt="Close icon" />
        </CloseMenu>
      </Header>
      <Content>
        {cart.length === 0 ? (
          <CartEmpty>Seu carrinho está vazio.</CartEmpty>
        ) : (
          <InCart />
        )}
      </Content>
      <WrapperTotal>
        <LabelTotal>Total:</LabelTotal>
        <Total>{totalAmount === 0 ? '-' : `R$${totalAmount.toFixed(0)}`}</Total>
      </WrapperTotal>
      <Checkout>Finalizar Compra</Checkout>
    </Aside>
  );
}

const Aside = styled.div`
  z-index: 1000;
  position: absolute;
  top: -50px;
  right: -31.5px;
  width: 466px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #0F52BA;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
`;

const Header = styled.div`
  width: 400px;
  margin: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Content = styled.div`
  flex: 1;
  padding-top: 10px;
  overflow: auto;
`
const Title = styled.h1`
  width: 180px;
  height: 56px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  font-size: 27px;
  color: #FFFFFF;
  font-weight: 700;
  line-height: 32.91px;
`;

const CloseMenu = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background: #0F52BA;
  cursor: pointer;
`;

const IconClose = styled.img`
  width: 38px;
  height: 38px;
`;

const WrapperTotal = styled.div`
  margin-bottom: 10px;
  padding: 15px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`
const LabelTotal = styled.h1`
  color: #FFFFFF;
  line-height: 15px;
  font-size: 28px;
  font-weight: 700;
`
const Total = styled.span`
  color: #FFFFFF;
  line-height: 15px;
  font-size: 28px;
  font-weight: 700;
`

const Checkout = styled.button`
  width: 486px;
  height: 97px;
  color: #FFFFFF;
  font-size: 28px;
  font-weight: 700;
  line-height: 15px;
  border: none;
  background: #000000;
  cursor: pointer;
`;

const CartEmpty = styled.h1`
  flex: 1;
  text-align: center;
  font-size: 15px;
  line-height: 19px;
  font-weight: 600;
`