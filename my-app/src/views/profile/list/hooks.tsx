import { useNavigate } from "react-router-dom";
import * as Contexts from "../../../contexts"
import * as Services from "../../../services"
const useContextListener = Contexts.Views.Profile.List.useListener;

export const useProfileListListener = () => {

  const { 
    state, 
    setList
  } = useContextListener();

  const navigate =  useNavigate();

  const onInitView = async () => {
    await getList()
  }
  
  const getList = async () => {
    const resp = await Services.Profile.find();

    if ( resp ) {
      setList(resp.profiles);
    }
  }

  const onNavigateEdit = (_id: string) => {
    navigate('/profiles/edit/' + _id);
  }

  return {
    state,
    onInitView,
    onNavigateEdit,
  }

}