import styled from "styled-components";
import bag from "../../assets/icons/shopping-bag.png"
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

type Product = {
  products: Array<{
    id: number;
    name: string;
    brand: string;
    description: string;
    photo: string;
    price: string;
    createdAt: string;
    updateAt: string;
  }>;
  count: number;
};

type Item = {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  createdAt: string;
  updateAt: string;
}

export function InMain({ data }: { data: Product }) {
  const {cart, setCart} = useContext(CartContext);

  const addedToCart = (item: Item): void => {
    const index = cart.findIndex((product) => product.id === item.id);

    if(index !== -1){
      return
    }else{
      const newProduct = {...item, quantity: 1};
      setCart((previusProducts) => [...previusProducts, newProduct])
    }
  }

  return (
    <Wrapper>
      {data.products.map((item) => (
        <Card key={item.id}>
          <WrapperProduct>
            <WrapperImg>
              <Img src={item.photo} alt={item.name} />
            </WrapperImg>
            <About>
              <Info>
                <Product>{item.name}</Product>
                <Price>R${item.price.replace('.00', '')}</Price>
              </Info>
              <Description>{item.description}</Description>
            </About>
          </WrapperProduct>
          <BtnAddedToCart onClick={() => addedToCart(item)}>
            <Bag src={bag} />
            <LabelBtn>
              Comprar
            </LabelBtn>
          </BtnAddedToCart>
        </Card>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;

const Card = styled.div`
  width: 218px;
  height: 285px;
  border: none;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #FFFFFF;
  box-shadow: 0 0 10px #e6e6e6;
  overflow: hidden;
`;

const WrapperProduct = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const WrapperImg = styled.div`
  width: 111px;
  height: 138px;
`;

const Img = styled.img`
  width: 100%;
`;

const About = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Info = styled.div`
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Product = styled.h1`
  font-size: 15px;
  line-height: 19px;
  font-weight: 400;
`;

const Price = styled.span`
  padding: 5px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  line-height: 15px;
  font-weight: 700;
  border-radius: 5px;
  background-color: #373737;
  color: #FFFFFF;
`;

const Description = styled.h3`
  padding: 5px;
  color: #2C2C2C;
  font-size: 10px;
  font-weight: 300;
  line-height: 12px;
`;

const BtnAddedToCart = styled.button`
  width: 218px;
  height: 31.91px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 10px;
  background-color: #0F52BA;
  cursor: pointer;
`;

const LabelBtn = styled.h1`
  color: #FFFFFF;
  font-size: 14px;
  font-weight: 700;
`

const Bag = styled.img`
  width: 12px;
  height: 13.5px;
`