import { Provider } from "react-redux"
import { store } from "./store"
import { AppRouter } from "./router"
import { BrowserRouter } from "react-router-dom"

/* estilos */
import 'primereact/resources/themes/lara-light-indigo/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'


function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </BrowserRouter>
  )
}

export default App
