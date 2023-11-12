import styled from "styled-components"

export function Footer(){

  return(
    <Baseboard>
      <Copy>MKS sistemas &copy; Todos os direitos reservados</Copy>
    </Baseboard>
  )
}

const Baseboard = styled.footer`
  background: #EEEEEE;
  width: 100%;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;

`

const Copy = styled.h1`
  size: 12px;
  font-weight: 400;
  line-height: 14.63px;
`