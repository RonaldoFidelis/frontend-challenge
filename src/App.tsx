import styled from "styled-components"
import { TopMenu } from "./components/TopMenu"

const Main = styled.div`
  width: 100%;
  height: 100vh;
  background: #FFFFFF;
`

export function App() {

  return (
    <Main>
      <TopMenu/>
    </Main>
  )
}
