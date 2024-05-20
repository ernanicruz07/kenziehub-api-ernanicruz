import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Link } from "react-router-dom";

import { StyledRegisterPage } from "./styled";
import { Form } from "../../styles/form"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Toasfy } from "../../components/Toastfy";

import { UserContext } from "../../context/UserContext"
import { useContext } from "react"

export function RegisterPage(){

    const {toastfy, onSubmitFunctionRegister} = useContext(UserContext)

    const formSchema =yup.object().shape({
        name: yup.string().required("Nome obrigatório"),
        email: yup.string().required("Email obrigatório").email("Email inválido"),
        password: yup.string().required("Senha obrigatória").matches(/^.{6,}$/, "Senha precisa ter no mínimo 6 caracteres"),
        confirmPassword: yup.string().required("Confirmação de senha obrigatória").oneOf([yup.ref('password'), null], "Senha deve ser igual"),
        bio: yup.string().required("Campo obrigatório"),
        contact: yup.string().required("Campo obrigatório"),
        course_module: yup.string().required("Seleção obrigatória")
    })

    const {register, handleSubmit, formState: {errors}} = useForm({
        mode: "onBlur",
        resolver: yupResolver(formSchema)
    })
    
    return (
        <StyledRegisterPage>
            <div className="content">
                <div className="div-title-link">
                    <h1>Kenzie Hub</h1>
                    <Link to={"/"} className="link">Voltar</Link>
                </div>
                <div className="div-form">
                    <Form onSubmit={handleSubmit(onSubmitFunctionRegister)}>
                        <h2>Crie sua conta</h2>
                        <p className="info-form">Rápido e grátis, vamos nessa</p>
                        <div className="div-input-error">
                            <Input type="text" property="Nome" placeholder="Digite aqui seu nome" toRegister="name" register={register}/>
                            <p className="error">{errors.name?.message}</p>
                        </div>
                        <div className="div-input-error">
                            <Input type="text" property="Email" placeholder="Digite aqui seu email" toRegister="email" register={register}/>
                            <p className="error">{errors.email?.message}</p>
                        </div>
                        <div className="div-input-error">
                            <Input type="password" property="Senha" placeholder="Crie sua senha" toRegister="password" register={register}/>
                            <p className="error">{errors.password?.message}</p>
                        </div>
                        <div className="div-input-error">
                            <Input type="password" property="Confirme sua Senha" placeholder="Digite novamente sua senha" toRegister="confirmPassword" register={register}/>
                            <p className="error">{errors.confirmPassword?.message}</p>
                        </div>
                        <div className="div-input-error">
                            <Input type="text" property="Bio" placeholder="Fale sobre você" toRegister="bio" register={register}/>
                            <p className="error">{errors.bio?.message}</p>
                        </div>
                        <div className="div-input-error">
                            <Input type="text" property="Contato" placeholder="Opção de contato" toRegister="contact" register={register}/>
                            <p className="error">{errors.contact?.message}</p>
                        </div>
                        <div className="div-input-error">
                            <div className="div-select">
                                <label>Selecionar módulo</label>
                                <select {...register("course_module")}>
                                    <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo (Introdução ao Frontend)</option>
                                    <option value="Segundo módulo (Frontend Avançado)">Segundo módulo (Frontend Avançado)</option>
                                    <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo (Introdução ao Backend)</option>
                                    <option value="Quarto módulo (Backend Avançado)">Quarto módulo (Backend Avançado)</option>
                                </select>
                            </div>
                            <p className="error">{errors.course_module?.message}</p>
                        </div>
                        <Button className="buttonToRegister" content="Cadastrar"/>
                    </Form>
                </div>
            </div>
            <div>
                {toastfy === true ? (
                    <Toasfy/>
                ):(
                    <div>

                    </div>
                )}
            </div>
        </StyledRegisterPage>
    )
}