import type { FC } from 'react'
import { ThemeProvider as MuiThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

export const ThemeProvider: FC = ({ children }) => {
  return (
    <MuiThemeProvider theme={responsiveFontSizes(theme)}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  )
}

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        a: {
          color: 'inherit',
          textDecoration: 'none'
        }
      }
    }
  },
  typography: {
    fontSize: 20,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(',')
  }
})
