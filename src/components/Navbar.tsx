import styled from "styled-components";
import { CartControl } from "./CartControl";

export function Navbar() {

  return (
    <Menu>
      <Wrapper>
        <Title>MKS</Title>
        <Subtitle>Sistemas</Subtitle>
      </Wrapper>
      <CartControl/>
    </Menu>
  )
}

const Menu = styled.nav`
  position: fixed;
  display: flex;
  align-items:center;
  justify-content: space-between;
  padding-left: 2rem;
  padding-right: 2rem;
  background: #0F52BA;
  width: 100%;
  height: 101px;
`
const Wrapper = styled.div`
  height: 50px;
  display: flex;
  gap: 8px;
  padding: 2px;
  align-items: center;
  flex-direction: row;
`
const Title = styled.h1`
  color: #FFFFFF;
  line-height: 19px;
  font-size: 40px;
  font-weight: 600;
`
const Subtitle = styled.h3`
  margin-top: 12px;
  color: #FFFFFF;
  line-height: 19px;
  font-size: 20px;
  font-weight: 300;
`