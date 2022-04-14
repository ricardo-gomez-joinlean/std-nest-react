import { Form } from "react-bootstrap"
import * as Contexts from "../../../../../../contexts"

const useContextListener = Contexts.Views.Crud.useListener;

export const FormComponent = () => {

  const { state, changeForm } = useContextListener();

  const onChangeForm = (name: string, value: string) => {
    changeForm(name, value);
  }

  return (
    <>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control 
          onChange={(e) => onChangeForm(e.target.name, e.target.value)}
          value={state.form.name}
          name='name'
          type="name" 
          placeholder="Enter name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
          onChange={(e) => onChangeForm(e.target.name, e.target.value)}
          value={state.form.email}
          name='email'
          type="email" 
          placeholder="Enter email" />
      </Form.Group>
      {
        state.isNew 
          ?
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control 
                onChange={(e) => onChangeForm(e.target.name, e.target.value)}
                value={state.form.password}
                name='password'
                type="password" 
                placeholder="Password" />
            </Form.Group>
          :
            <></>
      }
    </>
  )
}