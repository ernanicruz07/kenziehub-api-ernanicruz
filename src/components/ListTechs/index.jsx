import { UserContext } from "../../context/UserContext"
import { useContext } from "react"

import { StyleList } from "./styled"
import { CardTech } from "../CardTech"

export function ListTechs(){

    const {listTechs} = useContext(UserContext)
    
    return (
        <StyleList>
         {listTechs.length === 0 ? (
            <h5>Ainda não cadastrou tecnologias</h5>
          ):(
            
            listTechs.map((tech)=>{
                return (<CardTech key={tech.id} tech={tech}/>)
            })
            
          )}
        </StyleList>
    )
}

    