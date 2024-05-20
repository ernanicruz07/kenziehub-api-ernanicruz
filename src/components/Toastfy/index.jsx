import { ToastfyStyled } from "./styled";
import imagePositive from "./../../assets/positive.svg";
import imageNegative from "./../../assets/exclamation.svg";

import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export function Toasfy(){

    const {setToastfy, statusToastfy, infoToastfy} = useContext(UserContext)

    return (
        <ToastfyStyled>
            {statusToastfy === "positive" ? (
                <div className="first-div-toastfy">
                    <div className="second-div-toastfy">
                        <div className="third-div-toastfy">
                            <div className="image-sucess"><img src={imagePositive} alt="" /></div>
                            <h3>{infoToastfy}</h3>
                        </div>
                        <button onClick={()=>{setToastfy(false)}}>X</button>
                    </div>
                    <div className="status-positive">

                    </div>
                </div>
            ):(
                <div className="first-div-toastfy">
                    <div className="second-div-toastfy">
                        <div className="third-div-toastfy">
                            <div className="image-negative"><img src={imageNegative} alt="" /></div>
                            <h3>Ops! Algo deu errado</h3>
                        </div>
                        <button onClick={()=>{setToastfy(false)}}>X</button>
                    </div>
                    <div className="status-negative">

                    </div>
                </div>
            )}
        </ToastfyStyled>
    )
}