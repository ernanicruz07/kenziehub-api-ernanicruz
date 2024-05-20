import styled from "styled-components";

export const StyledHomePage = styled.div`
    main{
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .section-main-top{
        width: 100%;
        border-top: 1px solid var(--color-grey-3);
        border-bottom: 1px solid var(--color-grey-3);
        padding: 0 12px;
    }

    .section-main-top div{
        margin: 0 auto;
        max-width: 770.31px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 45px 0;
    }

    .section-main-top h2{
        color: var(--color-grey-0);
        font-size: var(--size-2);
        font-weight: var(--weight-1);
    }

    .section-main-top p{
        color: var(--color-grey-1);
        font-size: var(--size-4);
    }

    .section-main-content{
        width: 100%;
        padding: 37px 12px;
    }

    .div-list-techs{
        margin: 0 auto;
        max-width: 770.31px;
        display: flex;
        flex-direction: column;
        gap: 28px;
    }

    .div-title-button-add{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .section-main-content h4{
        color: var(--color-grey-0);
        font-size: var(--size-2);
        font-weight: var(--weight-2);
    }

    .button-add-tech{
        background-color: var(--color-grey-3);
        padding: 11px;
        display: flex;
        align-items: center;
        border: 1px solid var(--color-grey-3);
        border-radius: var(--radius-1);
    }

    .button-add-tech:hover{
        background-color: var(--color-grey-2);
        border: 1px solid var(--color-grey-2);
    }

    @media(max-width: 600px){
        .section-main-top div{
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
        }
    }
`