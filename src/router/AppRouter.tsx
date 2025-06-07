import { Navigate, Route, Routes } from "react-router"
import { AuthRouter } from "../auth/router/AuthRouter"
import { HeroesRouter } from "../heroes/router/HeroesRouter"
import { PublicRoutes } from "../auth/router/PublicRoutes"
import { PrivateRoutes } from "../auth/router/PrivateRoutes"

export const AppRouter = () => {
  return (
      <Routes>
          
            <Route element={ <PublicRoutes/> }>
              <Route path="/" element={<Navigate to="/auth" replace />} />
              { AuthRouter() }
            </Route>


            <Route element={ <PrivateRoutes/> } >
              { HeroesRouter() }
            </Route>


          <Route path="*" element={<Navigate to="/auth" replace />} />
          {/* <Route path="/" element={<Navigate to="/auth" replace />} />
          { AuthRouter() }
          { HeroesRouter() }
          <Route path="*" element={<Navigate to="/auth" replace />} /> */}
      </Routes>
  )
}
