import styled from "styled-components";
import icon from "../assets/icons/Close_cart.png";

interface Props {
  setCart: React.Dispatch<React.SetStateAction<boolean>>;
}

export function OpenCart({ setCart }: Props) {
  const handleCart = (): void => {
    setCart(false);
  };

  return (
    <Aside>
      <Header>
        <Title>Carrinho de compras</Title>
        <CloseMenu onClick={handleCart}>
          <IconClose src={icon} alt="Close icon" />
        </CloseMenu>
      </Header>
      <Products>Produtos</Products>
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

const Products = styled.div`
  flex: 1;
  margin: auto;
  display: flex;
  gap: 10px;
  align-items: center;
  flex-direction: column;
`;

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
