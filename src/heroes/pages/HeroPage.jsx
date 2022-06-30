import React from 'react'
import { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import getHeroById from '../helpers/getHeroById';
import  arrow  from '../../assets/heroes/dc-arrow.jpg'
const HeroPage = () => {
  const navigateBack = useNavigate()

  const { slug } = useParams()
console.log(arrow);
  const hero = useMemo( () => getHeroById( slug ), [ slug ] ) 

  const onNavigateBack = () => {

    navigateBack( -1 )
  }

  if (! hero) {
    return <Navigate to='/marvel' />
  }

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img 
        src= { `/src/assets/heroes/${slug}.JPG` }
        alt={ hero.superhero }
        className='img-thumbnail animate__backInLeft animate__animated animate__backInLeft' />
      </div>

      <div className="col-8">
        <h3>{ hero.superhero }</h3>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>
            <b>Alter ego: </b>
            { hero.alter_ego }
          </li>
          <li className='list-group-item'>
            <b>Alter publisher: </b>
            { hero.publisher }
          </li>
          <li className='list-group-item'>
            <b>Alter first appearance: </b>
            { hero.first_appearance }
          </li>
        </ul>

        <h5 className='mt-3'> Characters </h5>
        <p>{ hero.characters }</p>

        <button 
        onClick={ onNavigateBack }
        className="btn btn-outline-primary">
        Regresar
        </button>
      </div>
    </div>
  )
}

export default HeroPage