import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import styled from "styled-components";

export function ProductInCart(){
  const {cart} = useContext(CartContext);

  return (
    <Wrapper>
      {cart.map((product) => (
        <Card key={product.id}>
          <Photo>
            <Img src={product.photo}/>
          </Photo>
          <Name>{product.name}</Name>
          <WrapperQuantity>
            <Label>
              Qtd:
            </Label>
          </WrapperQuantity>
          <Price>R${product.price.replace('.00','')}</Price>
        </Card>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  gap: 15px;
  width: 100%;
  align-items: center;
  flex-direction: column;
`

const Card = styled.div`
  width: 379px;
  height: 95px;
  border-radius: 8px;
  border: none;
  display: flex;
  padding-left: 10px;
  padding-right: 10px;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  background: #FFFFFF;
`
const Photo = styled.div`
  width: 46px;
  height: 57px;
`

const Img = styled.img`
  width: 100%;
`

const Name = styled.span`
  width: 113px;
  height: 33px;
  font-size: 13px;
  line-height: 17px;
  font-weight: 400;
`

const WrapperQuantity = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`
const Label = styled.p`
  font-size: 5px;
  font-weight: 400;
  line-height: 6.1px;
`
const Price = styled.span`
  width: 62px;
  height: 17px;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
`