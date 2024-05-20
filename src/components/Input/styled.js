import styled from "styled-components";

export const StyledInput = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;

    label{
        font-size: var(--size-4);
        color: var(--color-grey-0);
    }

    input{
        padding: 10.5px 16px;
        width: 100%;
        background-color: var(--color-grey-2);
        border: 1px solid var(--color-grey-0);
        border-radius: var(--radius-1);
        outline: none;
        color: var(--color-grey-0);
        font-size: var(--size-3);
    }

    input::placeholder{
        color: var(--color-grey-1);
        font-size: var(--size-3);
    }

`