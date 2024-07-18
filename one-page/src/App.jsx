import React from 'react'
import { createGlobalStyle } from 'styled-components'
import Main from './main.jsx'

const GlobalStyle = createGlobalStyle `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #E5E5E5;
    font-family: "DM Sans", sans-serif;
  }
`

function App() {
  return (
    <>
      <GlobalStyle/>
      <Main/>
    </>
  )
}

export default App
