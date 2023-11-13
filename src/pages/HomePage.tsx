import { Navbar } from "../components/Navbar"
import { Main } from "../components/Main"
import { Footer } from "../components/Footer"
import styled from "styled-components"

export function HomePage() {
  return(
    <Wrapper>
      <Navbar/>
      <Main/>
      <Footer/>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: #FFFFFF;
  display: flex;
  flex-direction: column;
`