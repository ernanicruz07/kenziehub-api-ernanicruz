import styled from "styled-components";

export const StyledHeader = styled.header`
    width: 100%;
    padding: 20px 12px;

    div{
        max-width: 770.31px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    h1{
        font-size: var(--size-2);
        color: var(--color-primary);
        font-weight: var(--weight-1);
    }

    .logout{
        padding: 10px 16px;
        background-color: var(--color-grey-3);
        border: 1px solid var(--color-grey-3);
        border-radius: var(--radius-1);
        color: var(--color-grey-0);
        font-size: var(--size-4);
        font-weight: var(--weight-2);
    }

    .logout:hover{
        background-color: var(--color-grey-2);
    }
`