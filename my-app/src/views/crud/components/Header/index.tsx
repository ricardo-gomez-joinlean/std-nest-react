import { VoidFunctionComponent } from "react"

interface IHeaderProps {
  onClick: () => void;
  title: string;
}

export const Header: VoidFunctionComponent<IHeaderProps> = (props) => {
  return (
    <div className="row" >
      <div className="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-10" >
        <h2>{props.title}</h2>
      </div>
      <div className="col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2" >
        <div className="d-grid gap-2">
          <button 
            onClick={props.onClick}
            className="btn btn-primary" 
            type="button">New +</button>
        </div>
      </div>
    </div>
  )
}