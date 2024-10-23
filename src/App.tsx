
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./Home/Signup/Page";
import { AppRoutes } from "./utils/route";
import Login from "./Home/Login/Page";
function Layout() {
  return (
    <Routes>
     <Route path={AppRoutes.register} element={<Signup />} /> 
     <Route path={AppRoutes.login} element={<Login />} /> 
    </Routes>
  );
}

export default function App() {

  return (
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
  );
}