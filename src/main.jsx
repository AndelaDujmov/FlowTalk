import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from '@emotion/react'
import './index.css'
import App from './App.jsx'
import theme from './variables/theme.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App/>
    </ThemeProvider>
  </StrictMode>,
)
