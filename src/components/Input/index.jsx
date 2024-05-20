import { StyledInput } from "./styled"

import { useContext } from "react"
import { TechContext } from "../../context/TechContext"

export function Input({type, property, placeholder, toRegister, register}){

    const {inputValue} = useContext(TechContext)
    
    return (
        <StyledInput>
            <label>{property}</label>
            {inputValue === "" ? (
                <input type={type} placeholder={placeholder} {...register(toRegister)}/>
            ):(
                <input type={type} placeholder={placeholder} value={inputValue} {...register(toRegister)}/>
            )}
        </StyledInput>
    )
}