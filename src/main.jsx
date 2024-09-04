import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { NextUIProvider } from '@nextui-org/system'
import { Provider } from 'react-redux'
import store from './redux/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
   <NextUIProvider>
    <Provider store={store}>
    <App />
    </Provider>
   </NextUIProvider>
   </BrowserRouter>
  </StrictMode>,
)
