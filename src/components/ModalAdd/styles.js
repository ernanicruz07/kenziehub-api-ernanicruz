import styled from "styled-components";

export const StyledModal = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;

    .div-modal{
        background-color: var(--color-grey-3);
        width: 369px;
        display: flex;
        flex-direction: column;
        border: transparent;
        border-radius: var(--radius-1);
    }

    .div-first{
        background-color: var(--color-grey-2);
        display: flex;
        justify-content: space-between;
        padding: 12px 20px;
        border: transparent;
        border-radius: 4px 4px 0 0;
    }

    h3{
        font-size: var(--size-3);
        color: var(--color-grey-0);
        font-weight: var(--weight-1);
    }

    .div-first button{
        font-family: var(--nunito);
        background-color: var(--color-grey-2);
        border: transparent;
        color: var(--color-grey-1);
        font-size: var(--size-5);
        font-weight: var(--weight-2);
    }

    .div-first button:hover{
        color: var(--color-grey-0);
    }

    .div-form{
        width: 100%;
        padding: 12px 20px;
    }

    .button-register-tech{
        border: 1px solid var(--color-primary);
        background-color: var(--color-primary);
        color: var(--color-grey-0);
    }

    .button-register-tech:hover{
        border: 1px solid var(--color-primary-focus);
        background-color: var(--color-primary-focus);
    }

    .div-buttons{
        width: 100%;
        display: flex;
        align-items: center;
        gap: 22px;
    }

    .save-update{
        background-color: var(--color-primary);
        border: 1px solid var(--color-primary);
        color: var(--color-grey-0);
    }

    .button-delete{
        padding: 10.5px 23.5px;
        background-color: var(--color-grey-1);
        border: 1px solid var(--color-grey-1);
        border-radius: var(--radius-1);
        font-size: var(--size-5);
        font-weight: var(--weight-3);
        color: var(--color-grey-0);
    }

    .button-delete:hover{
        background-color: var(--color-grey-2);
        border: 1px solid var(--color-grey-2);
    }
  
`