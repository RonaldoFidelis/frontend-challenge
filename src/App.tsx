import styled from "styled-components"
import { TopMenu } from "./components/TopMenu"
import { Footer } from "./components/Footer"

const Main = styled.div`
  width: 100%;
  height: 100vh;
  background: #FFFFFF;
  display: flex;
  flex-direction: column;
`

export function App() {

  return (
    <Main>
      <TopMenu/>
      <Footer/>
    </Main>
  )
}
