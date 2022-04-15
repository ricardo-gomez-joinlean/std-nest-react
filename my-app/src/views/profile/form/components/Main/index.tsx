import { Header } from "../Header"
import { MainForm } from "../Form"
import { useEffect } from "react"
import { useProfileFormListener } from "../../hooks"

export const Main = () => {
 
  const {
    onInitView
  } = useProfileFormListener() 

  const onSave = () => {}
  const onSaveAs = () => {}

  useEffect(() => {
    onInitView();
  }, []);

  return (
    <>
      <div className="container pt-3">
        <Header
          onSave={onSave}
          onSaveAs={onSaveAs}
          title="Profile"
        />
        <MainForm />
      </div>
    </>
  )
}