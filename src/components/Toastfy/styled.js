import styled from "styled-components";

export const ToastfyStyled = styled.div`

@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');

    position: fixed;
    width: 286px;
    display: flex;
    flex-direction: column;
    background-color: var(--color-grey-2);
    border-radius: var(--radius-1);
    animation: toastIt 10000ms ease-in forwards;

    @keyframes toastIt {
    0%     {right: 30px; top: -200px}
    12%    {right: 30px; top: 28px}
    50%    {right: 30px; top: 28px}
    75%    {right: 30px; top: 28px}
    100%   {right: 30px; top: 28px}
    }

    .first-div-toastfy{
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .second-div-toastfy{
        width: 100%;
        padding: 18px 10px;
        display: flex;
        justify-content: space-between;
    }

    .third-div-toastfy{
        display: flex;
        align-items: center;
        gap: 12px;
    }

    .status-positive{
        background-color: var(--color-sucess);
        height: 6px;
        width: 206px;
        border-radius: 0 0 0 4px;
    }

    .status-negative{
        background-color: var(--color-negative);
        height: 6px;
        width: 206px;
        border-radius: 0 0 0 4px;
    }

    .image-sucess{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--color-sucess);
        width: 28px;
        height: 28px;
        border-radius: 50%;
    }

    .image-negative{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--color-negative);
        width: 28px;
        height: 28px;
        border-radius: 50%;
    }

    h3{
        color: var(--color-grey-0);
        font-size: var(--size-3);
        font-weight: var(--weight-1);
    }

    button{
        font-family: 'Nunito', sans-serif;
        font-size: var(--sixe-3);
        font-weight: var(--weight-1);
        color: var(--color-grey-1);
        background-color: var(--color-grey-2);
        border: transparent;
        position: absolute;
        top: 6px;
        right: 11px;
    }

    button:hover{
        color: var(--color-grey-0);
    }
`