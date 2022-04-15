import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap"
import { 
  useProfileListListener
} from "../../../../hooks"

export const TableRow = () => {
  
  const {
    state,
    onNavigateEdit
  } = useProfileListListener();

  const items = state.listItems;

  return (
    <tbody>
      {
        items.map((item, index) => {
          return (
            <tr key={index} >
              <td>{item.name}</td>
              <td>
                <Button 
                  onClick={() => onNavigateEdit(item._id || '')}
                  variant="primary" 
                  size="sm" >Edit</Button>
              </td>
            </tr>
          )
        })
      }
    </tbody> 
  )
}