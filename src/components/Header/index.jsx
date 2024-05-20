import { Link } from "react-router-dom";

import { StyledHeader } from "./styled";

export function Header(){
    return (
        <StyledHeader>
            <div>
                <h1>Kenzie Hub</h1>
                <Link to="/" className="logout" onClick={()=>{window.localStorage.clear()}}>Sair</Link>
            </div>
        </StyledHeader>
    )
}