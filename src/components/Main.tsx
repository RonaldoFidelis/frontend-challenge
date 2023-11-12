import styled from "styled-components"
import { useFetch } from "../hooks/useFetch"
import { CardProductInMain } from "./CardProductInMain";

export function Main() {
  const {data, isLoading, error} = useFetch();

  if(isLoading){
    console.log('Carregando...')
  }

  if(error){
    console.log(error)
  }

  return(
    <Wrapper>
      {data && <CardProductInMain data={data}/>}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  flex: 1;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`