import { useEffect } from "react";
import * as Contexts from "../../../../contexts"
import * as Services from "../../../../services"
import { useCrudListener } from "../../hooks"
import { Header } from "../Header"
import { Table } from "../Table"
import { ModalForm } from "../ModalForm"
import { SearchFilter } from "../SearchFilter"

const useContextListener = Contexts.Views.Crud.useListener;

export const Main = () => {
 
  const { 
    state, 
   } = useContextListener();

  const {
    onInitView,
    onCancel,
    onNew,
    onSave
  } = useCrudListener();

  useEffect(() => {
    onInitView();
  }, [])

  
  return (
    <div className="container pt-3" >
      <ModalForm 
        onSave={onSave}
        onCancel={onCancel}
        show={state.showModal} />
      <Header 
        title="CRUD on Nest and React"
        onClick={onNew}
      />
      <SearchFilter />
      <Table/>
    </div>
  )
}