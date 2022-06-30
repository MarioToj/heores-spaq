import React from 'react'
import queryString from 'query-string'

import { useLocation, useNavigate } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { getHeroeByName } from '../helpers/getHeroeByName'
import HeroCard from '../components/HeroCard'

const SearchPage = () => {

  const navigate = useNavigate()

  const location = useLocation()

  const { q = '' } = queryString.parse( location.search )
  const heroes = getHeroeByName( q )

  const { searchText, onInputChange } = useForm({
    searchText: `${ q }`
  })

  //condicional alert
  const showError = ( q.length > 0 ) && heroes.length === 0;

  const onSearchSubmit = (e) => {

    e.preventDefault();

    if (searchText.trim().length <= 1) return;
    console.log({ searchText });
    navigate( `?q=${searchText}` )

  }

  return (
    <>
      <h1>SearchPage</h1>
      <hr />

      <div className="row">
      <div className="col-5">
      <form onSubmit={ onSearchSubmit }>
        <input 
        placeholder='Search a hero'
        className='form-control'
        type="text"
        name="searchText"
        autoComplete='off'
        value={ searchText }
        onChange={ onInputChange }
         />

         <button className='btn btn-outline-primary mt-1'>
          Search
         </button>
      </form>
      </div>

      <div className="col-7">
        <h4>Results</h4>
        <hr />
        <div className="alert alert-primary" style={ { display: q !== '' ? 'none' : '' } }>
          Search a hero
        </div>

        <div className="alert alert-danger"  style={ { display: showError ? '' : 'none' } }>
         No hero with <b>{ q }</b>
        </div>
      </div>

      {

        heroes.map( hero => (
          <HeroCard key={hero.id} { ...hero } />
        ) )

      }

      </div>
    </>
  )
}

export default SearchPage