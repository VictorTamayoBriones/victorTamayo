import { Route, Routes } from "react-router-dom"
import { About } from "../views/About";
import { Home } from '../views/Home';
import { Projects } from "../views/Projects";

export const AppRoutes = () =>{
    return(
        <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="/projects" element={ <Projects/> } />
            <Route path="/about" element={ <About/> } />
        </Routes>
    )
}