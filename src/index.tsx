import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import * as serviceWorker from './serviceWorker'
import store from './redux/store'
import Routes from './router/routes'
import { THEME } from './modules/styles/theme'
import GlobalStyles from './modules/styles/global-styles'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { blue, purple, grey } from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {
    // type: 'dark',
    primary: {
      main: purple['A700'],
    },
  },
  typography: {
    fontFamily: ['"Lato"', 'sans-serif'].join(','),
  },
})

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <ThemeProvider theme={THEME}>
      <React.Fragment>
        <GlobalStyles />
        <Provider store={store}>
          <Routes />
        </Provider>
      </React.Fragment>
    </ThemeProvider>
  </MuiThemeProvider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
