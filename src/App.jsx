import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Main } from "./styled-components/Main"
import { Home } from "./views/Home/inedx"

function App() {

  return (
    <Main>
      <Header/>
      <Home/>
      <Footer/>
    </Main>
  )
}

export default App
