import { FunctionComponent, useReducer, useContext } from "react"
import { Interfaces } from "../../../../shared"
import { MainContext, IMainState } from "./context"
import { reducer } from "./reducer"

const initState: IMainState = {
  listItems: [],
  isLoading: false,
}

export const useListener = () => useContext(MainContext);

export const MainProvider: FunctionComponent = (props) => {
  
  const [state, dispatch] = useReducer(reducer, initState);

  const setList = (profiles: Interfaces.Models.IProfile[]) => { dispatch({ type: 'setList', payload: profiles }) }
  const isLoading = (loading: boolean) => { dispatch({ type: 'setLoading', payload: loading }) }

  return (
    <MainContext.Provider value={{
      state,
      setList,
      isLoading
    }} >
      {props.children}
    </MainContext.Provider>
  )


}