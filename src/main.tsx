import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { ThemeProvider } from './providers/ThemeProvider'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

ReactDOM.render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
  document.getElementById('root')
)
