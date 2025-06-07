import { Navigate, Route } from "react-router"
import { DCPage, HeroPage, HeroesPage, MarvelPage } from "../pages"
import { HeroesLayout } from "../pages/Layout/HeroesLayout"
import { SearchHeroPage } from "../pages/SearchHeroPage/SearchHeroPage"

export const HeroesRouter = () => {
  return (
    <Route path="heroes" element={<HeroesLayout />} >
        <Route path="" element={<HeroesPage/>} ></Route>
        <Route path="marvel" element={<MarvelPage/>} ></Route>
        <Route path="dc" element={<DCPage/>} ></Route>
        {/* ABAJO: Ejemplo de Rutas con VarArgs */}
        <Route path="hero/:id" element={<HeroPage/>} ></Route>
        <Route path="search" element={<SearchHeroPage/>} ></Route>
        <Route path="*" element={<Navigate to={"/heroes"} />} ></Route>
    </Route>
  );
}
