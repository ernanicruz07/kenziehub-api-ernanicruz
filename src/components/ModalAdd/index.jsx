import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"

import { StyledModal } from "./styles";
import { Form } from "../../styles/form";
import { Input } from "../Input";
import { Button } from "../Button";

import { UserContext } from "../../context/UserContext"
import { TechContext } from "../../context/TechContext";
import { useContext } from "react"

export function ModalAdd(){

    const {setStatusModalAdd} = useContext(UserContext)

    const {createTech, statusModalUpdate, setStatusModalUpdate, idTech, deleteTech, changingTech, setInputValue} = useContext(TechContext)

    const formSchema =yup.object().shape({
        title: yup.string().required("Nome da tecnologia obrigatória"),
        status: yup.string().required("Nível de abilidade obrigatório")
    })

    const {register, handleSubmit, formState: {errors}} = useForm({
        mode: "onBlur",
        resolver: yupResolver(formSchema)
    })

    return (
        <StyledModal>
            {statusModalUpdate === false ? (
                <div className="div-modal">
                    <div className="div-first">
                        <h3>Cadastrar Tecnologia</h3>
                        <button onClick={()=>{setStatusModalAdd(false)}}>X</button>
                    </div>
                    <div className="div-form">
                        <Form onSubmit={handleSubmit(createTech)}>
                            <div className="div-input-error">
                                <Input type="text" property="Nome" placeholder="Nome da Tecnologia" toRegister="title" register={register}/>
                                <p className="error">{errors.title?.message}</p>
                            </div>
                            <div className="div-select">
                                <label>Selecionar Status</label>
                                <select {...register("status")}>
                                    <option value="Iniciante">Iniciante</option>
                                    <option value="Intermediário">Intermediário</option>
                                    <option value="Avançado">Avançado</option>
                                </select>
                            </div>
                            <Button content="Cadastrar Tecnologia" className="button-register-tech"/>
                        </Form>
                    </div>
                </div>
            ):(
                <div className="div-modal">
                    <div className="div-first">
                        <h3>Tecnologia Detalhes</h3>
                        <button onClick={()=>{setStatusModalAdd(false);setStatusModalUpdate(false);setInputValue("")}}>X</button>
                    </div>
                    <div className="div-form">
                        <Form id={idTech} onSubmit={handleSubmit(changingTech)}>
                            <div className="div-input-error">
                                <Input type="text" property="Nome" placeholder="Nome da Tecnologia" toRegister="title" register={register}/>
                                <p className="error">{errors.title?.message}</p>
                            </div>
                            <div className="div-select">
                                <label>Selecionar Status</label>
                                <select {...register("status")}>
                                    <option value="Iniciante">Iniciante</option>
                                    <option value="Intermediário">Intermediário</option>
                                    <option value="Avançado">Avançado</option>
                                </select>
                            </div>
                            <div className="div-buttons">
                                <Button content="Salvar Alterações" className="save-update"/>
                                <button id={idTech} className="button-delete" type="button" onClick={(e)=>{deleteTech(e.target.id)}}>Excluir</button>
                            </div>
                        </Form>
                    </div>
                </div>
            )}
        </StyledModal>
    )
}