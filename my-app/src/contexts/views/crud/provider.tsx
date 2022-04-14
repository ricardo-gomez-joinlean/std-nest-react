import { FunctionComponent, useReducer, useContext } from "react"
import { Interfaces } from "../../../shared"
import { MainContext, IMainState } from "./context"
import { reducer } from "./reducer"

const initState: IMainState = {
  isNew: true,
  form: {
    email: '',
    name: '',
    password: ''
  },
  listItems: [],
  isLoading: false,
  showModal: false,
}

export const useListener = () => useContext(MainContext);

export const MainProvider: FunctionComponent = (props) => {
  
  const [state, dispatch] = useReducer(reducer, initState);

  const setUserForm = (user: Interfaces.Models.IUser) => {
    dispatch({ type: 'setUserForm', payload: user });
  }

  const setList = (users: Interfaces.Models.IUser[]) => {
    dispatch({ type: 'setList', payload: users });
  }

  const setLoading = (loading: boolean) => {
    dispatch({ type: 'setLoading', payload: loading });
  }

  const toggleModal = (showModal: boolean) => {
    dispatch({ type: 'toggleModal', payload: showModal });
  }
  
  const changeForm = (name: string, value: string) => {
    dispatch({ type: 'changeForm', payload: { name, value } });
  }

  const closeForm = () => {
    dispatch({ type: 'closeForm' });
  }

  const getUser = (user: Interfaces.Models.IUser) => {
    dispatch({ type: 'getUser', payload: user });
  }

  return (
    <MainContext.Provider value={{
      state,
      setUserForm,
      setList,
      setLoading,
      toggleModal,
      changeForm,
      closeForm,
      getUser
    }} >
      {props.children}
    </MainContext.Provider>
  )


}