import Home from "./pages/home"
import ProviderTheme from "./theme/CreateTheme"
import NavBar from "./layout/NavBar"
import { Route, Routes } from "react-router-dom"
import SearchRes from "./pages/searchRes"
function App() {

  return (
    <ProviderTheme>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchRes />} />
      </Routes>
    </ProviderTheme>
  )
}

export default App
