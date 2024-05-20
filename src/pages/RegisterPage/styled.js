import styled from "styled-components";

export const StyledRegisterPage = styled.div`
    width: 100%;
    padding: 77px;

    .content{
        width: 369px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 35.7px;
    }

    .div-title-link{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .content h1{
        font-size: var(--size-1);
        color: var(--color-primary);
        font-weight: var(--weight-1);
    }

    .div-form{
        width: 100%;
        padding: 42px 22px;
        background-color: var(--color-grey-3);
        border-radius: var(--radius-1);
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .link{
        padding: 10px 16px;
        background-color: var(--color-grey-3);
        border: 1px solid var(--color-grey-3);
        border-radius: var(--radius-1);
        color: var(--color-grey-0);
        font-size: var(--size-4);
        font-weight: var(--weight-2);
    }

    .link:hover{
        background-color: var(--color-grey-2);
    }

    .buttonToRegister{
        background-color: var(--color-primary-negative);
        border: 1px solid var(--color-primary-negative);
        color: var(--color-grey-0);
    }

    .buttonToRegister:hover{
        background-color: var(--color-primary);
        border: 1px solid var(--color-primary);
    }

    @media(max-width: 600px){
        padding: 77px 12px;
        .content{
            width: 100%;
        }
    }
`