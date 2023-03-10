import { CssBaseline, ThemeProvider } from "@mui/material"
import { onAuthStateChanged } from "firebase/auth"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { RouterProvider } from "react-router-dom"
import auth from "../firebase.init"
import { setUser } from "./features/auth/authSlice"
import routes from "./routes/routes"
import { theme } from "./theme/theme"

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user.email))
      }
    })
  }, [])


  return (<ThemeProvider theme={theme}>
    <CssBaseline />
    <RouterProvider router={routes} />
  </ThemeProvider>

  )
}

export default App
