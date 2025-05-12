import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { ScrollToTop } from './components/'
import { CartProvider } from './context/CartContext.jsx'
import { FilterProvider } from './context/FilterContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
        <FilterProvider>
          <ScrollToTop/>
          <ToastContainer closeButton={false} autoClose={300} position={"bottom-right"}/>
          <App/>
        </FilterProvider>
      </CartProvider>
    </BrowserRouter>

    
    
  </StrictMode>,
)