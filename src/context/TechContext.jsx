import { createContext, useState } from "react";
import { api } from "../services/api";

import { useContext } from "react";
import { UserContext } from "./UserContext";

export const TechContext = createContext({})

export function TechProvider({children}){

    const {setStatusModalAdd, setStatusToastfy, setToastfy, listTechs, setInfoToastfy} = useContext(UserContext)

    const [statusModalUpdate, setStatusModalUpdate] = useState(false)

    const [idTech, setIdTech] = useState("")

    const [inputValue, setInputValue] = useState("")

    const token = window.localStorage.getItem("token")

    async function createTech(data){
        try{
            await api.post("/users/techs", data, {headers: {Authorization: `Bearer ${token}`}})
            setStatusToastfy("positive")
            setInfoToastfy("Tecnologia criada com sucesso!")
            setStatusModalAdd(false)
            setToastfy(true)
            

        }catch(err){
            setStatusToastfy("negative")
            setStatusModalAdd(false)
            setToastfy(true)
            
        }
    }

    async function changingTech(data){
        try{
            await api.put("/users/techs/" + idTech, data, {headers: {Authorization: `Bearer ${token}`}})
            setStatusToastfy("positive")
            setInfoToastfy("Tecnologia alterada com sucesso!")
            setStatusModalAdd(false)
            setStatusModalUpdate(false)
            setInputValue("")
            setToastfy(true)
        }catch(err){
            setStatusToastfy("negative")
            setStatusModalAdd(false)
            setStatusModalUpdate(false)
            setInputValue("")
            setToastfy(true)
        }
    }

    async function deleteTech(id){
        try{
            await api.delete("/users/techs/" + id, {headers: {Authorization: `Bearer ${token}`}})
            setStatusToastfy("positive")
            setInfoToastfy("Tecnologia deletada com sucesso!")
            setStatusModalAdd(false)
            setStatusModalUpdate(false)
            setInputValue("")
            setToastfy(true)
        }catch(err){
            setStatusToastfy("negative")
            setStatusModalAdd(false)
            setStatusModalUpdate(false)
            setInputValue("")
            setToastfy(true)
            
        }
    }

    function selectTechCard(id){
        setIdTech(id)
        let techFound = listTechs.find((tech)=>{
            return tech.id === id
        })
        
        setInputValue(techFound.title)
        setStatusModalUpdate(true)
        setStatusModalAdd(true)
    }

    return(
        <TechContext.Provider value={{createTech, selectTechCard, statusModalUpdate, setStatusModalUpdate, idTech, deleteTech, inputValue, setInputValue, changingTech}}>
            {children}
        </TechContext.Provider>
    )
}