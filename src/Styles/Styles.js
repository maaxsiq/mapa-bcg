import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        color: black;
        margin: 0;
        padding: 0;
        font-family: Roboto;
        height: 100vh;
        width: 100vw;
    }

    * {
        margin: 0;
        padding: 0;
            &::-webkit-scrollbar {
                width: 10px;
            }

            /* Track */
            ::-webkit-scrollbar-track {
            background: #444444;
            }

            /* Handle */
            ::-webkit-scrollbar-thumb {
            background: #c4c4c4;
            }

            /* Handle on hover */
            ::-webkit-scrollbar-thumb:hover {
            background: #555;
            }
    }
`
export default GlobalStyle;
