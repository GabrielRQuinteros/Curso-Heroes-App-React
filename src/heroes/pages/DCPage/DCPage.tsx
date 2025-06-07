import { HeroList } from "../../components/HeroList/HeroList"
import { Publisher } from "../../interfaces/Hero.interfase"

export const DCPage = () => {
  return (
    <>
        <h1>DC Comics</h1>
        <hr />
        <HeroList publisher={ Publisher.DC } />


    </>
    
  )
}
