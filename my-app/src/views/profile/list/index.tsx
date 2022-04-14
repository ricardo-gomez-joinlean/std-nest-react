import * as Contexts from "../../../contexts"
import { Main } from "./components"

export const MainView = () => {

  return (
    <Contexts.Views.Profile.List.MainProvider>
      <Main />
    </Contexts.Views.Profile.List.MainProvider>
  )
}