import { Link } from 'react-router';
import type { Hero } from '../../interfaces/Hero.interfase';
export const HeroCard = ( { hero }: {hero: Hero}) => {
  
  const heroURL = `/heroes/${hero.id}.jpg`;

    return (
    <div className='col' >
      <div className='card animate__animated animate__fadeIn'>
        <div className="row no-gutters">
            <div className="col-4 ">
              <img className='card-img'  src={heroURL} alt={hero.superhero} />
            </div>
            <div className="col-8 card-body " >
              <h5 className="card-title">{hero.superhero}</h5>
              <p className="card-text">{hero.alter_ego}</p>
              <p className="card-text">
                { hero.characters }
              </p>
              <p className="card-text text-muted">
                  { hero.first_appearance }
              </p>
              {/* NOTA: React Router toma como ruta absoluta si el link comienza con "/"
                        (Ejemplo: to="/heroes" ==> /heroes  ==> Ruta absoluta)
                        (Ejemplpo: to="heroes" ==> heroes/marvel/heroes) ==> Ruta relativa */}
              <Link to={`/heroes/hero/${hero.id}`} >Mas...</Link>

            </div>
        </div>

      </div>

    </div>
  )
}
