
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./Home/Signup/Page";
import { AppRoutes } from "./utils/route";
function Layout() {
  return (
    <Routes>
     <Route path={AppRoutes.register} element={<Signup />} /> 
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