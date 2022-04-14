import * as Contexts from "../../contexts"
import * as Services from "../../services"
const useContextListener = Contexts.Views.Crud.useListener;

export const useCrudListener = () => {

  const { 
    state, 
    setList,
    toggleModal,
    closeForm,
    setLoading,
    getUser
  } = useContextListener();

  const onInitView = async () => {
    await getList()
  }

  const onNew = () => {
    toggleModal(true);
  }

  const onCancel = () => {
    closeForm();
  }

  const getList = async () => {
    const resp = await Services.User.list();

    if ( resp ) {
      setList(resp.users);
    }
  }

  const createUser = async () => {
    
    const resp = await Services.User.create(state.form);

    if ( !resp )
      return false;
      
    return resp.user;

  }

  const updateUser = async () => {

    const resp = await Services.User.update(
      state.form._id as string,
      state.form 
    );

    if ( !resp )
      return false;
      
    return resp.user;

  }

  const onSave = async () => {

    setLoading(true);
    
    if ( state.isNew ) {
      await createUser();
    } else {
      await updateUser();
    }

    setLoading(false);
    closeForm();

    await getList();

  }

  const onEdit = async (_id: string) => {

    setLoading(true);

    const findedUser = await Services.User.findOne(_id);

    if ( findedUser ) {

      getUser(findedUser.user);

    }

    setLoading(false);
    
  }

  return {
    state,
    onInitView,
    onNew,
    onCancel,
    onSave,
    onEdit
  }

}