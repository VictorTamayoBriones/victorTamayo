import { collection, getDocs } from "firebase/firestore";
import { db } from "./config";

export const getAllProjects = async () =>{
    const projects = [];

    try{
        
        await getDocs(collection(db, 'proyectos'))
        .then(result => {
            result.forEach(doc=>{
                projects.push(doc.data())
            })
        })
        
        
    }catch(err){
        console.log(err)
    }

    return projects
}