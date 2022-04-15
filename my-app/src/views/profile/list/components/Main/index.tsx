import { Table } from "../Table"
import { Header } from "../Header"
import { useProfileListListener } from "../../hooks"
import { useEffect } from "react";

export const Main = () => {

  const {
    onInitView
  } = useProfileListListener();

  useEffect(() => {

    onInitView();

  }, []);

  return (
    <div className="container pt-3">
      <Header 
        onClick={() => {}}
        title="Profiles" />
      <Table />
    </div>
  )
}