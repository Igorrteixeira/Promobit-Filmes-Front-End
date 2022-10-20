import {Router} from "./router/Router"
import {GlobalStyle} from "./global/StyleGlobal"
import {GlobalState} from "../src/global/GlobalState"

export const App = () => {
  return (
    <GlobalState >
      <GlobalStyle/>
      <Router/>
    </GlobalState>
  )
}


