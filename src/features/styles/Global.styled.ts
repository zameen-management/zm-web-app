import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        position: relative;
        font-family: "Roboto", sans-serif;
    }
    
    #root, html, body {
        width: 100%;
        height: 100%;
        font-size: 16px;
    }

    h1 {
        font-size: 36px;
    }

    h2 {
        font-size: 30px;
        font-weight: 400;
    }

    h3 {
        font-size: 24px;
        font-weight: 500;
    }

    h4{
        font-size: 20px;
        font-weight: 500;
    }

    h5{
        font-size: 1rem;
        font-weight: 500;
        letter-spacing: 0.2px;
    }

    p{
        font-size: 1rem;
        letter-spacing: 0.25px;
        line-height: 1.5rem;
        font-weight: 300;
        color: ${({ theme }) => theme.colors.textGray};
    }

    a{
        text-decoration: none;
        color: ${({ theme }) => theme.colors.primary};

        &:hover{
            text-decoration: underline;
        }
    }

    svg{
        width: 30px;
        height: 30px;
    }

    .icon{
        cursor: pointer;
    }

    @media (max-width: 1080px) {
        h1{
            font-size: 30px;
        }

        h2{
            font-size: 28px;
        }

        h3{
            font-size: 20px;
        }

        h4{
            font-size: 18px;
        }
    }

    .text-label{
        color: ${({ theme }) => theme.colors.darkGray};
		font-size: 14px;
		font-weight: 300;

		.required {
			color: red;
		}
    }

    .text-sm{
        font-size: 14px;
        color: black;
        font-weight: 300;
    }

    .text-black{
        color: black;
    }

    .text-semibold{
        font-weight: 500;
    }
`;
