import { Route, Routes } from "react-router-dom"
import { Home } from "../views/Home";
import { Projects } from "../views/Projects";

export const AppRoutes = () =>{;

    return(
        <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="/projects" element={ <Projects/> } />
        </Routes>
    )
}