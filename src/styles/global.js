import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
    }

    :root{
        --color-primary: #ff577f;
        --color-primary-focus: #ff427f;
        --color-primary-negative: #59323f;
        --color-sucess: #3fe864;
        --color-negative: #e83f5b;
        --color-grey-0: #f8f9fa;
        --color-grey-1: #868e96;
        --color-grey-2: #343b41;
        --color-grey-3: #212529;
        --color-grey-4: #121214;

        --size-1: 30px;
        --size-2: 18px;
        --size-3: 14px;
        --size-4: 12px;
        --size-5: 16px;

        --weight-1: 700;
        --weight-2: 600;
        --weight-3: 500;

        --radius-1: 4px;

        --nunito: 'Nunito', sans-serif;
    }

    body{
        background-color: black;
        font-family: 'Inter', sans-serif;
    }

    button{
        cursor: pointer;
    }

    .div-input-error{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    .error{
        color: var(--color-negative);
        font-size: var(--size-4);
    }
`