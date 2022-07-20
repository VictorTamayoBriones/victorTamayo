import { configureStore } from "@reduxjs/toolkit";
import ProjectReducer from './projectsSlice';

export const store = configureStore({
    reducer:{
        projects: ProjectReducer
    }
})