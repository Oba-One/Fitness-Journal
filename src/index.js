import React from 'react'
import { render } from 'react-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import blueGrey from '@material-ui/core/colors/blueGrey'
import App from './App'

const theme = createMuiTheme({
  palette: {
    primary: blueGrey,
    secondary: {
      main: blueGrey[50]
    },
    type: 'dark'
  },
  spacing: {
    unit: 10
  }
})

render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
)
