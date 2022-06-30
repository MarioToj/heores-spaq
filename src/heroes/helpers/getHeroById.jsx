
import { heroes } from '../data/heroes'

const getHeroById = ( slug ) => {
 
    return heroes.find( hero => hero.id === slug )
}

export default getHeroById