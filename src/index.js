import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'
import {
  StylesProvider,
  ThemeProvider as MuiThemeProvider,
  createMuiTheme,
} from '@material-ui/core'
import Layout from './Layout'

const theme = createMuiTheme()

ReactDOM.render(
  <React.StrictMode>
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <StyledComponentsThemeProvider theme={theme}>
          <Layout />
        </StyledComponentsThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
