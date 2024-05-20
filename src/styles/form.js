import styled from "styled-components";

export const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;

    h2{
        font-size: var(--size-2);
        color: var(--color-grey-0);
        font-weight: var(--weight-1);
    }

    .buttonLogin{
        border: 1px solid var(--color-primary);
        background-color: var(--color-primary);
        color: var(--color-grey-0);
    }

    .buttonLogin:hover{
        border: 1px solid var(--color-primary-focus);
        background-color: var(--color-primary-focus);
    }

    .info-form{
        color: var(--color-grey-1);
        font-size: var(--size-4);
    }

    .div-select{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .div-select label{
        font-size: var(--size-4);
        color: var(--color-grey-0);
    }

    .div-select select{
        padding: 10.5px 12px;
        width: 100%;
        background-color: var(--color-grey-2);
        border: 1px solid var(--color-grey-0);
        border-radius: var(--radius-1);
        outline: none;
        color: var(--color-grey-1);
        font-size: var(--size-3);
    }

`