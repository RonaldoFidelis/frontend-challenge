import styled from "styled-components"

export function Footer(){

  return(
    <Wrapper>
      <Copy>MKS sistemas &copy; Todos os direitos reservados</Copy>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  background: #EEEEEE;
  width: 100%;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;

`

const Copy = styled.h1`
  font-size: 12px;
  font-weight: 400;
  line-height: 14.63px;
`