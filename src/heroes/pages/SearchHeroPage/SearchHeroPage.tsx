import { useLocation, useNavigate, type Location } from "react-router";
import { useForm } from "../../../hooks/useForm"
import queryString from "query-string";
import { getHeroesByName } from "../../helpers/HeroesFunctions";
import type { Hero } from "../../interfaces";
import { HeroCard } from "../../components";

export const SearchHeroPage = () => {

  // Para manipular mejor los qury parameters se instala la dependencia 
  const location:Location = useLocation();
  const navigate = useNavigate();

  const { q ='' } = queryString.parse( location.search ) as { q?: string };
  const searchedHeroes: Hero[] = getHeroesByName(q);
  
  const { searchText, onInputChange } = useForm({ searchText: q });

  const showSearch: boolean = ( q.length === 0 );
  const showNoResult: boolean = ( !showSearch && searchedHeroes.length=== 0 );


  const onSubmitForm = (event: React.FormEvent) => {
      event.preventDefault();
      // if( searchText.trim().length < 1 ) return;

      navigate(`?q=${searchText.trim()}`);
  }

  return (
    <>
        <h1>SearchHeroPage</h1>
        <hr />

        <div className="row">
            <div className="col-5">
                <h4>Searching</h4>
                <hr />
                <form onSubmit={ onSubmitForm } >
                  <input type="text"
                          placeholder="Search a hero"
                          className="form-control"
                          name="searchText" //Es el campo que usa el Hook para extraer el valor. Es como Angular usando formControl
                          autoComplete="off"
                          onChange={onInputChange}
                          value={searchText}
                    />
                    <button className="btn btn-outline-primary mt-2" >Search</button>
                </form>
            </div>
            <div className="col-7">
                <h4>Results</h4>
                <hr />
                <div className="alert alert-primary animate__animated animate__fadeIn" style={{ display: showSearch? 'block':'none' }}>
                  Search a Hero
                </div>
                <div className="alert alert-danger animate__animated animate__fadeIn" style={{ display: showNoResult? 'block':'none' }} >
                  No hero found with name {q}
                </div>

                { searchedHeroes.map( (hero) => <HeroCard key={hero.id} hero={hero}/>) }

            </div>
        </div>
    </>
  )
}
