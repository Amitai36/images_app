import Home from "./pages/home"
import ProviderTheme from "./theme/CreateTheme"
import NavBar from "./layout/NavBar"
import { Route, Routes } from "react-router-dom"
function App() {

  return (
    <ProviderTheme>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </ProviderTheme>
  )
}

export default App
