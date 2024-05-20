import styled from "styled-components";

export const StyledLoginPage = styled.div`
    width: 100%;
    height: 100vh;
    padding: 77px;

    .content{
        width: 369px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 35.7px;
    }

    .content h1{
        font-size: var(--size-1);
        color: var(--color-primary);
        font-weight: var(--weight-1);
    }

    .div-form-link{
        width: 100%;
        padding: 42px 22px;
        background-color: var(--color-grey-3);
        border-radius: var(--radius-1);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 34px;
    }

    .div-link{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 22px;
    }

    .div-link span{
        font-size: var(--size-4);
        font-weight: var(--weight-2);
        color: var(--color-grey-1);
    }

    .Link{
        width: 100%;
        background-color: var(--color-grey-1);
        border: 1px solid var(--color-grey-1);
        color: var(--color-grey-0);
        padding: 10.5px;
        border-radius: var(--radius-1);
        font-size: var(--size-5);
        font-weight: var(--weight-3);
        text-align: center;
    }

    .Link:hover{
        background-color: var(--color-grey-2);
        border: 1px solid var(--color-grey-2);
    }

    @media(max-width: 600px){
        padding: 77px 12px;
        .content{
            width: 100%;
        }
    }
`