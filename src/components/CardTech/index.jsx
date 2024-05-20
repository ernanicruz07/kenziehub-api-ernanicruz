import { useContext } from "react"
import { UserContext } from "../../context/UserContext"
import { TechContext } from "../../context/TechContext"

export function CardTech({tech}){

    const {selectTechCard} = useContext(TechContext)

    return (
        <li className="card-tech" id={tech.id} onClick={(e)=>{selectTechCard(e.target.id)}}>
            <h4>
                {tech.title}
            </h4>
            <p>
                {tech.status}
            </p>
        </li>
    )
}