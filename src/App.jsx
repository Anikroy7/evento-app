import { CssBaseline } from "@mui/material"
import { onAuthStateChanged } from "firebase/auth"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { RouterProvider } from "react-router-dom"
import auth from "../firebase.init"
import { setUser } from "./features/auth/authSlice"
import routes from "./routes/routes"

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user.email))
      }
    })
  }, [])


  return (<>
    <CssBaseline />
    <RouterProvider router={routes} />
  </>

  )
}

export default App
