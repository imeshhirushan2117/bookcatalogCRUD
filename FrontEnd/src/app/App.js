import { Route, Routes } from "react-router-dom";
import Sidebar from "../components/common/navBar/Sidebar";

function App() {
  return (
   <Routes>
    <Route exact path="/" element={<Sidebar/>}/>
   </Routes>
  );
}

export default App;
