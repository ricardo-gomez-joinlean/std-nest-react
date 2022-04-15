import {
  TableRow
} from "./components"


export const Table = () => {



  return (
    <div className="row" >
      <div className="col-12" >
        <table className="table" >
          <thead>
            <tr>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <TableRow />
        </table>
      </div>
    </div>
  )
}