import styled from "styled-components"
import { useFetch } from "../hooks/useFetch"
import { CardProduct } from "./CardProduct";

export function Content() {
  const {data, isLoading, error} = useFetch();

  if(isLoading){
    console.log('Carregando...')
  }

  if(error){
    console.log('Error')
  }

  return(
    <Wrapper>
      {data && <CardProduct data={data}/>}
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