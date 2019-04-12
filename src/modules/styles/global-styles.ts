import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  body {
    display: flex;
  }

  #root {
    display: flex;
    flex: 1;
    flex-direction: column;
  }
`

export default GlobalStyles
