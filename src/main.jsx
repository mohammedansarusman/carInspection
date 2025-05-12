import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Customer from './component/customer/Customer'


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/customer",
    element: <Customer />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>,
)



