import { HeroList } from "../../components"
import { Publisher } from "../../interfaces"

export const HeroesPage = () => {
  return (
    <>
      <h1>Heroes</h1>
      <hr />
      <HeroList publisher={Publisher.ALL}  ></HeroList>
    </>
  )
}
