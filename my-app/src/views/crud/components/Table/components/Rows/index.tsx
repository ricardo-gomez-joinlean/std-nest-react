import { Button } from "react-bootstrap"
import { 
  useCrudListener
} from "../../../../hooks"

export const TableRow = () => {
  
  const {
    state,
    onEdit
  } = useCrudListener();

  const items = state.listItems;

  return (
    <tbody>
      {
        items.map((item, index) => {
          return (
            <tr key={index} >
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>
                <Button 
                  onClick={() => onEdit(item._id || '')}
                  variant="primary"  >Edit</Button>
                <Button variant="primary" >Delete</Button>
              </td>
            </tr>
          )
        })
      }
    </tbody> 
  )
}