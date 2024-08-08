import './App.css'
import { createBrowserRouter,Navigate,RouterProvider } from 'react-router-dom'
import MainLeaut from './layout/MainLeaut'
import Home from './pages/Home'
import ToliqMalumod from './pages/ToliqMalumod'
import CartQoshish from './pages/CartQoshish'
import Contact from './pages/Contact'
import Login from './page/Login'
import ProtectRouter from './components/ProtactRouter'
import { useContext, useEffect, useState } from 'react'
import { GlobalContext } from './context/GlobalContext'
import Register from './page/Register'
import Haridlar from './pages/Haridlar'
import Habarlarim from './pages/Habarlarim'
function App() {
  let login=localStorage.getItem("login")
  let [user,setUser]=useState(false)
  let {state,setState}=useContext(GlobalContext)
  let [haritlar,setHaritlar]=useState(0)
  function harit(e){
  setHaritlar(haritlar+e)
  }
  useEffect(()=>{
  setState(login)
  },[login])
  useEffect(()=>{
    setUser(state)
  },[state])
  let router = createBrowserRouter([
    {
      path:"/",
      element:
      <ProtectRouter user={user} >
        <MainLeaut haritlar={haritlar}/>
      </ProtectRouter>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/toliq",
          element:<ToliqMalumod harit={harit}/>
        },
        {
          path:"/contact",
          element:<Contact/>
        },
        {
          path:"/Cart_qoshish",
          element:<CartQoshish/>
        },
        {
          path:"/carzinca",
          element:<Haridlar />
        },
        {
          path:"/habarlar",
          element:<Habarlarim/>
        }
      ]
    },
    {
      path:"/login",
      element:user?<Navigate to="/"/>:<Login />
    },
    {
      path:"/registor",
      element: user? <Navigate to='/'/>:<Register/>
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
