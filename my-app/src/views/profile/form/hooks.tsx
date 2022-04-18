import { useNavigate, useParams } from "react-router-dom";
import * as Contexts from "../../../contexts"
import * as Services from "../../../services"
const useContextListener = Contexts.Views.Profile.Form.useListener;

export const useProfileFormListener = () => {

  const { 
    state, 
    getProfile,
    onChangeViewCheck,
    onChangeDetailCheck
  } = useContextListener();

  const navigate =  useNavigate();
  const { id } = useParams();

  const onInitView = async () => {
    await getProfileService(id || '')
  }
  
  const getProfileService = async (_id: string) => {
    const resp = await Services.Profile.findOne(_id);

    if ( resp ) {
      getProfile(resp.profile);
    }
  }

  const onNavigateEdit = (_id: string) => {
    navigate('/profiles/edit/' + _id);
  }

  return {
    state,
    onInitView,
    onNavigateEdit,
    onChangeViewCheck,
    onChangeDetailCheck
  }

}