import { heroes } from "../data/heroes"
import { Publisher, type Hero } from "../interfaces/Hero.interfase"

export const getHeroesByPublisher = ( publisher: Publisher ): Hero[] => {
    if( publisher === Publisher.ALL )
        return heroes;
    return heroes.filter( h => h.publisher == publisher );
}

export const getHeroesById = ( id: string| undefined ): Hero|undefined => {
    return heroes.find( h => h.id === id );
}

export const getHeroesByName = (text: string): Hero[] => {
    const heroNameText: string | undefined = text?.trim();
    if ( !heroNameText || heroNameText.length < 0) return [];

    const regex = new RegExp(heroNameText, 'i');
    return heroes.filter(h => regex.test(h.superhero));
};