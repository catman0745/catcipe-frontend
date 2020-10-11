import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'
import {
  StylesProvider,
  ThemeProvider as MuiThemeProvider,
  unstable_createMuiStrictModeTheme as createMuiTheme, // for @material-ui/lab
} from '@material-ui/core'
import App from './App'

const theme = createMuiTheme()

ReactDOM.render(
  <React.StrictMode>
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <StyledComponentsThemeProvider theme={theme}>
          <App />
        </StyledComponentsThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
