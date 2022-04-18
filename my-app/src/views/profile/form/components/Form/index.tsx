import { useContext, VoidFunctionComponent } from "react";
import { Form, Card, AccordionContext, useAccordionButton, Button,   } from "react-bootstrap"
import { Accordion } from "react-bootstrap"
import { Interfaces } from "../../../../../shared";
import { useProfileFormListener } from "../../hooks"

export const MainForm = () => {

  const {
    state,
    onChangeViewCheck,
    onChangeDetailCheck,
    onChangeInput,
  } = useProfileFormListener();

  return (
    <div className="row pt-4">
      <div className="col-12">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Profile name</Form.Label>
        <Form.Control 
          onChange={(e) => onChangeInput(e.target.name, e.target.value)}
          value={state.profile.name}
          name="name"
          type="text" 
          placeholder="Name" />
      </Form.Group>
        <Accordion  alwaysOpen >
          {
            state.profile.access?.map( (item, index) => {
              return (
                <Card>
                  <ViewProfileHeader
                    onChange={(value) => onChangeViewCheck(item.name, value)}
                    label={item.label}
                    hasAccess={item.hasAccess}
                    eventKey={index}
                  />
                  <ViewProfileContent
                    onChange={(name, value) => onChangeDetailCheck(item.name, name, value)}
                    key={index} 
                    eventKey={index.toString()}
                    access={item} 
                  />
                </Card>
              )
            })
          }
        </Accordion>
      </div>
    </div>
  )
}

interface IViewProfileHeader {
  hasAccess: boolean;
  label: string;
  eventKey: number;
  onChange: (value: boolean) => void;
}

export const ViewProfileHeader: VoidFunctionComponent<IViewProfileHeader> = (props) => {

  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(
    props.eventKey.toString(),
    () => {},
  );

  return (
    <Card.Header >
      <div className="row">
        <div className="col-10">
          <Form.Check style={{ display: 'inline-block' }}
            type="switch"
            onChange={(e) => props.onChange(!props.hasAccess)}
            checked={props.hasAccess}
          />
          View: {props.label}
        </div>
        <div className="col-2 text-end">
          <Button 
            onClick={decoratedOnClick}
            size="sm" >Details</Button>
        </div>
      </div>
    </Card.Header>
  )
}

interface IViewProfileContentProps {
  access: Interfaces.Models.IProfileAccessView;
  eventKey: string;
  onChange: (name: string, value: boolean) => void;
}

export const ViewProfileContent: VoidFunctionComponent<IViewProfileContentProps> = (props) => {

  const actions = props.access.actions;

  return (
    <Accordion.Collapse eventKey={props.eventKey} >
      <div className="container p-4">
        <div className="row">
          <div className="col-12">
            {
              actions.map( (item) => {
                return (
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Check 
                      type="switch"
                      onChange={(e) => props.onChange(item.name, !item.hasAccess)}
                      checked={item.hasAccess}
                      label={item.label}
                    />
                  </Form.Group>
                )
              })
            }
          </div>
        </div>
      </div>
    </Accordion.Collapse>
  )
}