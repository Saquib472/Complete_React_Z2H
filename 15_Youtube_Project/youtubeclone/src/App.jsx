import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'
import Body from './components/Body'
import Head from './components/Head'
import MainContainer from './components/MainContainer'
import WatchPage from './components/WatchPage'
import Demo from './components/Demo'

function App() {
  const router = createBrowserRouter([
    {
      path : '/',
      element: <Body />,
      children : [
        {
          path : '/',
          element : <MainContainer />
        },
        {
          path : 'watch',
          element : <WatchPage />
        },
        {
          path : 'demo',
          element : <Demo />
        }
      ]
    }
  ])
  return (
    <>
      <Head/>
      <RouterProvider router={router} />
    </>
  )
}

export default App
