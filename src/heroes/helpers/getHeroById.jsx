
import { heroes } from '../data/Heroes'

const getHeroById = ( slug ) => {
 
    return heroes.find( hero => hero.id === slug )
}

export default getHeroById