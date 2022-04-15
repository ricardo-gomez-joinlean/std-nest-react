import { VoidFunctionComponent } from "react";
import { Form } from "react-bootstrap"
import { Accordion } from "react-bootstrap"
import { Interfaces } from "../../../../../shared";
import { useProfileFormListener } from "../../hooks"

export const MainForm = () => {

  const {
    state
  } = useProfileFormListener();

  return (
    <div className="row pt-4">
      <div className="col-12">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Profile name</Form.Label>
        <Form.Control 
          value={state.profile.name}
          name="name"
          type="text" 
          placeholder="Name" />
      </Form.Group>
        <Accordion defaultActiveKey="0" >
          {
            state.profile.access?.map( (item, index) => {
              return (
                <Accordion.Item eventKey={index.toString()} >
                  <Accordion.Header >
                    <Form.Check 
                      type="switch"
                      checked={item.hasAccess}
                    />
                    View: {item.label}
                  </Accordion.Header>
                  <ViewProfileContent access={item} />
                </Accordion.Item>
              )
            })
          }
          
        </Accordion>
      </div>
    </div>
  )
}

interface IViewProfileContentProps {
  access: Interfaces.Models.IProfileAccessView;
}

export const ViewProfileContent: VoidFunctionComponent<IViewProfileContentProps> = (props) => {
  
  const actions = props.access.actions;

  return (
    <Accordion.Body>
      <div className="row">
        <div className="col-12">
          {
            actions.map( (item, index) => {
              return (
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Check 
                    type="switch"
                    checked={item.hasAccess}
                    label={item.label}
                  />
                </Form.Group>
              )
            })
          }
        </div>
      </div>
    </Accordion.Body>
  )
}