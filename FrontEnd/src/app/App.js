import { Route, Routes } from "react-router-dom";
import Sidebar from "../components/common/navBar/Sidebar";
import Home from "../../src/pages/home/home";
import About from "../../src/pages/about/about";
import Contact from "../../src/pages/contact/contact";
import DashBoard from "../../src/pages/dashBoard/dashBoard";

function App() {
  return (
   <Routes>
    <Route exact path="/" element={<Sidebar/>}/>
    <Route exact path="home" element={<Home/>}/>
    <Route exact path="about" element={<About/>}/>
    <Route exact path="contact" element={<Contact/>}/>
    <Route exact path="dashBoard" element={<DashBoard/>}/>
   </Routes>
  );
}

export default App;
