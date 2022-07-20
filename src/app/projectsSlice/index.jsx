import { createSlice } from "@reduxjs/toolkit";
import { getAllProjects } from "../../firebase/getAllProjects";

const INITIAL_STATE = await getAllProjects();

export const ProjectsSlice = createSlice({
    name: "projects",
    initialState: INITIAL_STATE,
    reducers:{}
})

export default ProjectsSlice.reducer