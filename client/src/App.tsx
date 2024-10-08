import SearchImg from "./components/SearchImg"
import ProviderTheme from "./theme/CreateTheme"
function App() {

  return (
    <ProviderTheme>
      <SearchImg />
    </ProviderTheme>
  )
}

export default App
