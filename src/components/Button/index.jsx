import { StyledButton } from "./styled";

export function Button({content, className}){
    return(
        <StyledButton className={className} type="submit">
            {content}
        </StyledButton>
    )
}