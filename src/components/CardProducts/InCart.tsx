import { useCart } from "../../hooks/useCart";
import { useContext } from "react";
import { cartContext } from "../../context/CartContext";
import styled from "styled-components";
import iconDelete from "../../assets/icons/Close_cart.png";

export function InCart() {
  const { cart } = useContext(cartContext);
  const {incrementQuantity, decreaseQuantity, deleteWish} = useCart()

  return (
    <Wrapper>
      {cart.map((product) => (
        <Card key={product.id}>
          <Photo>
            <Img src={product.photo} />
          </Photo>
          <Name>{product.name}</Name>
          <WrapperQuantity>
            <Label>
              Qtd:
            </Label>
            <WrapperIncrementQuantity>
              <BtnQuantity onClick={() => decreaseQuantity(product)}>
                -
              </BtnQuantity>
              <CurrentQuantity>
                {product.quantity}
              </CurrentQuantity>
              <BtnQuantity onClick={() => incrementQuantity(product)}>
                +
              </BtnQuantity>
            </WrapperIncrementQuantity>
          </WrapperQuantity>
          <Price>R${product.price.replace('.00', '')}</Price>
          <DeleteWish onClick={() => deleteWish(product)}>
            <IconDelete src={iconDelete} />
          </DeleteWish>
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
  position: relative;
  width: 379px;
  height: 95px;
  border-radius: 8px;
  border: none;
  display: flex;
  padding: 10px;
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
  justify-content: center;
  flex-direction: column;
  margin-bottom: 9px;

`
const Label = styled.p`
  font-size: 5px;
  padding: 0.9px;
  font-weight: 400;
  line-height: 6.1px;
`
const WrapperIncrementQuantity = styled.div`
  display: grid;
  width: 50px;
  height: 19px;
  border: 0.3px solid #BFBFBF;
  border-radius: 4px;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(3,minmax(0,1fr));
`
const BtnQuantity = styled.button`
  grid-column: span 1 / span 1;
  display: flex;
  text-align: center;
  justify-content: center;
  height: 100%;
  background-color: #FFFFFF;
  border: none;
  cursor: pointer;
  font-weight: 400;
`
const CurrentQuantity = styled.h1`
  grid-column: span 1 / span 1;
  height: 100%;
  border-left: 0.3px solid #BFBFBF;
  border-right: 0.3px solid #BFBFBF;
  font-size: 8px;
  font-weight: 400;
  line-height: 9.75px;
  display: flex;
  align-items: center;
  justify-content: center;

`
const Price = styled.span`
  width: 62px;
  height: 17px;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
`

const DeleteWish = styled.button`
  position: absolute;
  top: -8px;
  right: -6px;
  border: none;
  background: none;
  cursor: pointer;
`

const IconDelete = styled.img`
  width: 16px;
`