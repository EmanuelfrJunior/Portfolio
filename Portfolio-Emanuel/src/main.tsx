import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from './App.tsx'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import { PageProject } from './pages/Project.tsx'
import { PageEmail } from './pages/Email.tsx'

const router = createBrowserRouter([
{
    path: "/", element: <App/>,
},
{
    path: "/Projetos", element: <PageProject/>
},
{
    path: "/Email", element: <PageEmail/>
}
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
