import { FunctionComponent, useReducer, useContext } from "react"
import { Interfaces } from "../../../../shared"
import { MainContext, IMainState } from "./context"
import { reducer } from "./reducer"

const initState: IMainState = {
  profile: {
    name: '',
    isActive: false
  },
  isLoading: false,
  isNew: true
}

export const useListener = () => useContext(MainContext);

export const MainProvider: FunctionComponent = (props) => {
  
  const [state, dispatch] = useReducer(reducer, initState);

  const getProfile = (profile: Interfaces.Models.IProfile) => { dispatch({ type: 'getProfile', payload: profile }) }
  
  const isLoading = (loading: boolean) => { dispatch({ type: 'setLoading', payload: loading }) }
  
  const onChangeViewCheck = (name: string, value: boolean) => { dispatch({ type: 'onChangeViewCheck', payload: { name, value } }) }

  const onChangeDetailCheck = (accessName: string, name: string, value: boolean) => {
    dispatch({ type: 'onChangeDetailCheck', payload: { accessName, name, value } });
  }

  return (
    <MainContext.Provider value={{
      state,
      getProfile,
      isLoading,
      onChangeViewCheck,
      onChangeDetailCheck
    }} >
      {props.children}
    </MainContext.Provider>
  )


}