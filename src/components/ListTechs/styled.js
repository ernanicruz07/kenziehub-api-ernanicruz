import styled from "styled-components";

export const StyleList = styled.ul`
    margin: 0 auto;
    width: 100%;
    padding: 23px;
    background-color: var(--color-grey-3);
    border: 1px solid var(--color-grey-3);
    border-radius: var(--radius-1);
    display: flex;
    flex-direction: column;
    gap: 16px;

    h5{
        color: var(--color-grey-0);
        font-size: var(--size-2);
        font-weight: var(--weight-2);
    }

    .card-tech{
        background-color: var(--color-grey-4);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 15px;
        border: 1px solid var(--color-grey-4);
        border-radius: var(--radius-1);
        cursor: pointer;
    }

    .card-tech:hover{
        background-color: var(--color-grey-2);
        border: 1px solid var(--color-grey-2);
    }

    .card-tech h4{
        font-size: var(--size-3);
        color: var(--color-grey-0);
        font-weight: var(--weight-1);
    }

    .card-tech p{
        font-size: var(--size-4);
        color: var(--color-grey-1);
    }
`