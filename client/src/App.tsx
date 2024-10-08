import SearchImg from "./components/SearchImg"
import Home from "./pages/home"
import ProviderTheme from "./theme/CreateTheme"
function App() {

  return (
    <ProviderTheme>
      <Home />
      <SearchImg />
    </ProviderTheme>
  )
}

export default App
