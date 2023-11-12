import styled from "styled-components";
import { CartMenu } from "./CartMenu";

export function TopMenu() {

  return (
    <Navbar>
      <ContentLogo>
        <Logo>MKS</Logo>
        <Subtitle>Sistemas</Subtitle>
      </ContentLogo>
      <CartMenu/>
    </Navbar>
  )
}

const Navbar = styled.nav`
  position: fixed;
  display: flex;
  align-items:center;
  justify-content: space-between;
  padding-left: 70px;
  padding-right: 70px;
  background: #0F52BA;
  width: 100%;
  height: 101px;
`
const ContentLogo = styled.div`
  height: 50px;
  display: flex;
  gap: 8px;
  padding: 2px;
  align-items: center;
  flex-direction: row;
`
const Logo = styled.h1`
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