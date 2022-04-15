import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css'
import {
  Crud,
  Profile
} from "./views"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/users" element={<Crud.MainView />} />
        <Route path="/profiles" element={<Profile.List.MainView />} />
          <Route path="/profiles/create" element={<Profile.Form.MainView />} />
          <Route path="/profiles/edit/:id" element={<Profile.Form.MainView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
