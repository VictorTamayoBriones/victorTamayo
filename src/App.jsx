import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { AppRoutes } from "./Routes"
import { Main } from "./styled-components/Main"

function App() {

  return (
    <Main>
      <Header/>
      <AppRoutes/>
      <Footer/>
    </Main>
  )
}

export default App
