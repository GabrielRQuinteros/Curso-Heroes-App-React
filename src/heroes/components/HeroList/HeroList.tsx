import { useMemo } from "react";
import { getHeroesByPublisher } from "../../helpers/HeroesFunctions";
import type { Hero, Publisher } from "../../interfaces";
import { HeroCard } from "../HeroCard/HeroCard";

export const HeroList = ({publisher}: {publisher: Publisher}) => {

    const heroes: Hero[] = useMemo( () => getHeroesByPublisher(publisher), [publisher] );
  return (
    <div className="row row-cols-1 row-cols-md-3 g-0-3">
        { heroes.map( h=> <HeroCard key={h.id} hero={h} /> )  }
    </div>
  )
}
