import { Interfaces } from "../../../shared"
import {
  IMainState
} from "./context"

type IActions =
  | { type: "setUserForm", payload: Interfaces.Models.IUser }
  | { type: "setList", payload: Interfaces.Models.IUser[] }
  | { type: "setLoading", payload: boolean }
  | { type: "toggleModal", payload: boolean }
  | { type: "changeForm", payload: { name: string; value: string; } }
  | { type: "closeForm" }
  | { type: "getUser", payload: Interfaces.Models.IUser }

export const reducer = (state: IMainState, action: IActions ): IMainState => {

  switch ( action.type ) {

    case 'setUserForm':
  
      return {
        ...state,
        form: action.payload
      }

      break;

    case 'setList':

      return {
        ...state,
        listItems: action.payload
      }

      break;

    case 'setLoading':

      return {
        ...state,
        isLoading: action.payload
      }

      break;

    case 'toggleModal':

      return {
        ...state,
        showModal: action.payload
      }

      break;

    case 'changeForm':

      const { name, value } = action.payload;

      return {
        ...state,
        form: {
          ...state.form,
          [name]: value
        }
      }

      break;

    case 'closeForm':

      return {
        ...state,
        isNew: true,
        showModal: false,
        form: {
          email: '',
          name: '',
          password: '',
          _id: ''
        }
      }

      break;

    case 'getUser': 

      const user = action.payload;  

      return {
        ...state,
        isNew: false,
        showModal: true,
        form: {
          ...user,
          password: ''
        }
      } 

      break;

    default:

      return state;

      break;

  }

}