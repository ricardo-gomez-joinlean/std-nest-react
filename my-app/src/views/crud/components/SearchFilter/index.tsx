import { useEffect, useState } from "react";
import { Form } from "react-bootstrap"

export const SearchFilter = () => {

  const [query, setQuery] = useState("");
  const [displayMessage, setDisplayMessage] = useState("");

  useEffect(() => {
    const timeOutId = setTimeout(() => setDisplayMessage(query), 500);
    return () => clearTimeout(timeOutId);
  }, [query]);

  return (
    <div className="row">
      <div className="col-12">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control 
          type="text"
          value={query}
          onChange={event => setQuery(event.target.value)}
           />
      </Form.Group>
      </div>
    </div>
  )
}