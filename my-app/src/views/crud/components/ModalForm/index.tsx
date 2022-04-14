import { VoidFunctionComponent } from "react"
import { Button, Form, Modal } from "react-bootstrap"
import { FormComponent } from "./components"
import {
  useCrudListener
} from "../../hooks"

interface IModalFormProps {
  show?: boolean;
  onCancel: () => void;
  onSave: () => void;
}

export const ModalForm: VoidFunctionComponent<IModalFormProps> = (props) => {

  const {
    state
  } = useCrudListener();

  const title = state.isNew ? 'Create a new user' : 'Edit user'

  return (
    <Modal show={props.show} onHide={props.onCancel} >
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormComponent />
      </Modal.Body>
      <Modal.Footer>
        <Button 
          variant="secondary" 
          onClick={props.onCancel} >
          Cancel
        </Button>
        <Button 
          variant="primary" 
          onClick={props.onSave} >
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  )
}