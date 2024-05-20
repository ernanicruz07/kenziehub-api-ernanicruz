import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Link } from "react-router-dom"

import { StyledLoginPage } from "./styled"
import { Form } from "../../styles/form"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Toasfy } from "../../components/Toastfy"

import { UserContext } from "../../context/UserContext"
import { useContext } from "react"

export function LoginPage(){

    const {onSubmitFunctionLogin, errorPasswordEmail, toastfy, buttonLogin} = useContext(UserContext)

    const formSchema =yup.object().shape({
        email: yup.string().required("Email obrigatório").email("Email inválido"),
        password: yup.string().required("Senha obrigatória")
    })

    const {register, handleSubmit, formState: {errors}} = useForm({
        mode: "onBlur",
        resolver: yupResolver(formSchema)
    })

    return(
        <StyledLoginPage>
            <div className="content">
                <h1>Kenzie Hub</h1>
                <div className="div-form-link">
                    <Form onSubmit={handleSubmit(onSubmitFunctionLogin)}>
                        <h2>Login</h2>
                        <div className="div-input-error">
                            <Input type="text" property="Email" placeholder="Digite seu email..." toRegister="email" register={register}/>
                            <p className="error">{errors.email?.message}</p>
                        </div>
                        <div className="div-input-error">
                            <Input type="password" property="Senha" placeholder="Digite sua senha..." toRegister="password" register={register}/>
                            <p className="error">{errors.password?.message}</p>
                            {errorPasswordEmail === true ? (
                                <p className="error">Email ou senha incorretos!</p>
                            ):(
                                <></>
                            )}
                        </div>
                        <Button className="buttonLogin" content={buttonLogin}/>
                    </Form>
                    <div className="div-link">
                        <span>Ainda não possui uma conta?</span>
                        <Link className="Link" to={"/register"}>Cadastre-se</Link>
                    </div>
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
        </StyledLoginPage>
    )
}