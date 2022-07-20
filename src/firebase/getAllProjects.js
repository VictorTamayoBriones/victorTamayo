import { collection, doc, DocumentSnapshot, getDocs, QuerySnapshot } from "firebase/firestore";
import { db } from "./config";

export const getAllProjects = async () =>{
    const projects = [];
    const res = await getDocs(collection(db, 'proyectos'));

    res.forEach(doc=>{
        projects.push(doc.data())
    })
    
    return projects;
}