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
            font-size: 0.7rem;
            width: 50vw;
            margin-top: 1rem;
            /* border: solid blue; */
        }
    }
`

export const Main = styled.main`
    display: flex;
    width: 100%;
    color: #2D2424;


    p {
        margin-left: 1rem;
        /* border: solid red; */
        font-size: 0.6rem;
        font-weight: 400;
        margin-top: 0.5rem;
    }
`
export const DivParagrafo = styled.div`
    /* border: solid red; */
    margin-top: 0.9rem;
    width: 65vw;
    h2 {
        font-size: 0.6rem;
        width: 60vw;
        height: 16vh;
        font-weight: 400;
        /* margin-top: 0.2rem; */
        margin-left: 1rem;
        /* border: solid blue; */
    }
    /* border: solid blue; */
    /* width: 30vw; */
`

export const P = styled.p`
    width: 62vw;
`
export const P2 = styled.p`
    width: 63vw;
`
export const P3 = styled.p`
    width: 62vw;
`

export const DivImg = styled.div `
    /* border: solid blue; */
    width: 36vw;

    img {
        width: 36vw;
        height: 81vh;
        /* border: solid green; */
        /* margin-top: 4rem; */
        position: absolute;
        /* bottom: 0.1rem; */
        right: 0rem;
        /* bottom: 50px; */
    }
`
