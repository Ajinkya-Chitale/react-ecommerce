import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import About from './pages/About'
import Collection from './pages/Collection'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Layout from './layout/layout'
import { Provider } from 'react-redux'
import { store } from './Store/store'
import Home from './pages/Home'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <NotFound />,

      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/collection',
          element: <Collection />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/contact',
          element: <Contact />
        },
      ]
    }
  ])

  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  )
}

export default App
