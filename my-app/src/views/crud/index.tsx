import * as Contexts from "../../contexts"
import { Main } from "./components"

export const MainView = () => {

  return (
    <Contexts.Views.Crud.MainProvider>
      <Main/>
    </Contexts.Views.Crud.MainProvider>
  )
}