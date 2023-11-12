import styled from "styled-components"
import { Navbar } from "../components/Navbar"
import { Content } from "../components/Main"
import { Footer } from "../components/Footer"

const Main = styled.div`
  width: 100%;
  height: 100vh;
  background: #FFFFFF;
  display: flex;
  flex-direction: column;
`

export function HomePage() {
  return(
    <Main>
      <Navbar/>
      <Content/>
      <Footer/>
    </Main>
  )
}