import * as Contexts from "../../../contexts"
import { Main } from "./components"

export const MainView = () => {

  return (
    <Contexts.Views.Profile.Form.MainProvider>
      <Main />
    </Contexts.Views.Profile.Form.MainProvider>
  )
}