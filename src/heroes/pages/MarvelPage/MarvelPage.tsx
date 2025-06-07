import { HeroList } from "../../components/HeroList/HeroList"
import { Publisher } from "../../interfaces/Hero.interfase"

export const MarvelPage = () => {
  return (
    <>
      <h1>Marvel Page</h1>
      <hr />
      <HeroList publisher={ Publisher.MARVEL } />
    </>
  )
}
