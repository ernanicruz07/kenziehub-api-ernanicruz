import { useEffect } from "react";
import { api } from "../../services/api";

import { StyledHomePage } from "./styled";
import { Header } from "../../components/Header";
import { ListTechs } from "../../components/ListTechs";
import { ModalAdd } from "../../components/ModalAdd";
import { Toasfy } from "../../components/Toastfy";
import imageAdd from "./../../assets/+.svg"

import { UserContext } from "../../context/UserContext"
import { useContext } from "react"
import { Navigate } from "react-router-dom";

export function HomePage(){

    const {infoUser, setInfoUser, setListTechs, statusModalAdd, setStatusModalAdd, toastfy, user, loading} = useContext(UserContext)

    useEffect(()=>{

        const token = window.localStorage.getItem("token")

        if(token){
            async function getInfoUser(){
                try{
                    const request = await api.get("/profile", {headers: {Authorization: `Bearer ${token}`}})
                    
                    setInfoUser(request.data)
                
                    setListTechs(request.data.techs)
                }catch(err){
                    console.error(err)
                }
            }
        
            getInfoUser()
        }

    },[toastfy, loading])

    if(loading){
        return null
    }
    
    return  user ?  
        <StyledHomePage>
            <Header/>
            <main>
                <section className="section-main-top">
                    <div>
                        <h2>Olá, {infoUser.name}</h2>
                        <p>{infoUser.course_module}</p>
                    </div>
                </section>
                <section className="section-main-content">
                    <div className="div-list-techs">
                        <div className="div-title-button-add">
                            <h4>Tecnologias</h4>
                            <button className="button-add-tech" onClick={()=>{setStatusModalAdd(true)}}><img src={imageAdd} alt="" /></button>
                        </div>
                        <ListTechs/>
                    </div>
                </section>
            </main>
            {statusModalAdd === false ? (
                <></>
            ):(
                <ModalAdd/>
            )}
            <div>
                {toastfy === true ? (
                    <Toasfy/>
                ):(
                    <div>

                    </div>
                )}
            </div>
        </StyledHomePage>
    :
        <Navigate to="/"/>
    
}