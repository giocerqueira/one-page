import styled from 'styled-components'

export const Body = styled.body `
    header {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        color: #2D2424;
        h1 {
            font-size: 1.2em;
            width: 50vw;
            margin-top: 2rem;
        }
        @media (min-width: 1550px) {
            margin-top: 2rem;
        }
    }
`

export const Main = styled.main`
    display: flex;
    width: 100%;
    color: #5C3D2E;
    p {
        margin-left: 1rem;
        font-size: 1em;
        font-weight: 400;
        margin-top: 1.2rem;
        @media (min-width: 1550px) {
            margin-left: 2rem;
        }
    }

`
export const DivParagrafo = styled.div`
    margin-top: 1.5rem;
    width: 65vw;
    height: 83vh;
    h2 {
        font-size: 1em;
        width: 60vw;
        height: 16vh;
        font-weight: 400;
        margin-left: 1rem;
        @media (min-width: 1550px) {
            margin-top: 0rem;
            height: 10vh;
            margin-left: 2rem;
        }
    }
    div {
        margin-left: 1rem;
        display: flex;
        width: 40vw;
        height: 5vh;
        margin-top: 0.5rem;
        justify-content: space-between;
        button {
            border-radius: 1rem;
            border: 2px solid #2D2424; 
            background-color: #AF8F6F;
            cursor: pointer;
            margin-top: 0.5rem;
            &:hover {
                transform: scale(1.05); 
                box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3); 
            }
            @media (min-width: 1550px) {
                    height: 4vh;
                    margin-top: 3rem;
                    margin-left: 1.2rem;
            }
            a {
                background-color: transparent;
                color: #E5E5E5;
                text-decoration: none;
            }
        }
        #Github {
            width: 13vw;
            @media (min-width: 1550px) {
                    width: 10.5vw;
            }
        }
        #Repositorio {
            width: 17.5vw;
            @media (min-width: 1550px) {
                    width: 14vw;
            }
        }
    }

    @media (min-width: 1550px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 80vh;
        margin-top: 0rem;
        }
`

export const P = styled.p`
    width: 58vw;
`
export const P2 = styled.p`
    width: 62vw;
    @media (min-width: 1550px) {
            width: 60vw;
        }
`
export const P3 = styled.p`
    width: 58vw; 
`

export const DivImg = styled.div `
    width: 36vw;
    img {
        width: 36vw;
        height: 81vh;
        position: absolute;
        right: 0rem;
        @media (min-width: 1550px) {
            width: 38vw;
        }
    }
`