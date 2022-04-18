import { Interfaces } from "../../../../shared"
import {
  IMainState
} from "./context"

type IActions =
  | { type: "getProfile", payload: Interfaces.Models.IProfile }
  | { type: "setLoading", payload: boolean }
  | { type: "onChangeViewCheck", payload: { name: string, value: boolean } }
  | { type: "onChangeDetailCheck", payload: { accessName: string, name: string, value: boolean } }
  | { type: "onChangeInput", payload: { name: string, value: string } }

export const reducer = (state: IMainState, action: IActions ): IMainState => {

  switch ( action.type ) {

    case 'getProfile': {
      const profile = action.payload;
  
      return {
        ...state,
        isNew: false,
        profile
      }
    }

    case 'setLoading': {
      return {
        ...state,
        isLoading: action.payload
      }
    }

    case 'onChangeViewCheck': {

      const { name, value } = action.payload;
  
      const newState = state;
  
      if ( newState.profile.access ) {
        
        const accessIndex = newState
          .profile
          .access
          .findIndex( item => item.name === name );
  
        newState
          .profile
          .access[accessIndex]
          .hasAccess = value;

        newState
          .profile
          .access[accessIndex]
          .actions
          .forEach((item, index) => {
            
            if ( newState.profile.access ) {

              newState
                .profile
                .access[accessIndex]
                .actions[index]
                .hasAccess = value;

            }

          })

  
      }
  
      return {
        ...newState
      }

    }

    case 'onChangeDetailCheck': {

      const { accessName, name, value } = action.payload;
  
      const newState = state;
  
      if ( newState.profile.access ) {
        
        const accessIndex = newState
          .profile
          .access
          .findIndex( item => item.name === accessName );
  
        const actionIndex = newState
          .profile
          .access[accessIndex]
          .actions
          .findIndex( item => item.name === name );

        newState
          .profile
          .access[accessIndex]
          .actions[actionIndex]
          .hasAccess = value;
  
      }
      
      return {
        ...newState
      }

    }

    case 'onChangeInput': {
      
      const { name, value } = action.payload;
   
      return {
        ...state,
        profile: {
          ...state.profile,
          [name]: value
        }
      }
    }

    default:

      return state;

      break;

  }

}