import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { api } from "../services/api";

import { TechProvider } from "./TechContext";

export const UserContext = createContext({})

export function UserProvider ({children}){

    const navigate = useNavigate()

    const [errorPasswordEmail, setErrorPasswordEmail] = useState(false)
    const [buttonLogin, setButtonLogin] = useState("Entrar")

    const [toastfy, setToastfy] = useState(false)
    const [statusToastfy, setStatusToastfy] = useState("")
    const [infoToastfy, setInfoToastfy] = useState("")
    const [statusModalAdd, setStatusModalAdd] = useState(false)

    const [user, setUser] = useState(null)
    const [infoUser, setInfoUser] = useState({})
    const [listTechs, setListTechs] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const token = localStorage.getItem("token")

        if(!token){
            setLoading(false)
            return
        }

        if(token){
            async function autoLogin(){
                try{
                    const request = await api.get("/profile", {headers: {Authorization: `Bearer ${token}`}})
                    
                    if(request.data.id){
                        setUser(request.data)
                        navigate("/home")
                    }

                }catch(err){
                    
                    localStorage.removeItem("token")
                }finally{
                    setLoading(false)
                }
            }

            autoLogin()
        }
    },[])

    function onSubmitFunctionLogin(data){
        setButtonLogin("Entrando...")
        async function toLogin(){
            try{
                const request = await api.post("/sessions", data)
                
                const {user: userResponse} = request.data

                window.localStorage.clear()
                window.localStorage.setItem("token", request.data.token)
                setUser(userResponse)
                navigate("/home")
                setButtonLogin("Entrar")
            }catch(err){
                console.error(err)
                if(err.message === "Network Error"){
                    setStatusToastfy("negative")
                    setToastfy(true)
                } else{
                    setErrorPasswordEmail(true)
                }
                setButtonLogin("Entrar")
            }
        }
        toLogin()

    }

    function onSubmitFunctionRegister(data){
        

        async function registerUser(){
            let {name, email, password, bio, contact, course_module} = {...data}
            let dataObj = {name, email, password, contact, course_module, bio}
            
            try{
                const request = await api.post("/users", dataObj)
                if (request.data){
                    setStatusToastfy("positive")
                    setInfoToastfy("Conta criada com sucesso!")
                    setToastfy(true)
                } else{
                    setStatusToastfy("negative")
                    setToastfy(true)
                }
            }catch(err){
                console.error(err)
                setStatusToastfy("negative")
                setToastfy(true)
            }
            
        } 
        registerUser()
    }

    return (
            <UserContext.Provider value={{onSubmitFunctionLogin, onSubmitFunctionRegister ,errorPasswordEmail, toastfy, setToastfy ,statusToastfy, setStatusToastfy, infoUser, setInfoUser, setListTechs, listTechs, statusModalAdd, setStatusModalAdd, buttonLogin, setButtonLogin, infoToastfy, setInfoToastfy, user, loading}}>
                <TechProvider>
                    {children}
                </TechProvider>
            </UserContext.Provider>
        )
}

