import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import { QueryClient, QueryClientProvider } from "react-query"
import { CartContextProvider } from './context/CartContext.tsx'
import './global.css'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
