import { Route, Routes } from "react-router-dom"

import LoginPage from "../auth/pages/LoginPage"
import HeroesRouter from "../heroes/router/HeroesRouter"
import PrivateRoute from "./PrivateRoute"
import { PublicRoute } from "./PublicRoute"


const AppRouter = () => {
  return (
    <>
        <Routes>
        <Route path="login" element={ 
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
         } />

        <Route path="/*" element={ 

          <PrivateRoute>
              <HeroesRouter/>
          </PrivateRoute>

         }/>

      </Routes>
    </>
  )
}

export default AppRouter