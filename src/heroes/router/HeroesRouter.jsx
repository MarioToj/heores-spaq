import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from '../../ui'

//Imports Heroes / Pages
import DcPage from '../pages/DcPage'
import MarvelPage from '../pages/MarvelPage'
import SearchPage from '../pages/SearchPage'
import HeroPage from '../pages/HeroPage'

const HeroesRouter = () => {
  return (
    <>
        <Navbar />

        <div className="container">
        <Routes>
        <Route path="/" element={<Navigate to='/marvel' />} />
            
        <Route path="marvel" element={<MarvelPage />} />
        <Route path="search" element={<SearchPage />} />
        
        <Route path="dc" element={<DcPage />} />

       <Route path="/hero/:slug" element={ <HeroPage/> }/>

      </Routes>
        </div>
    </>
  )
}

export default HeroesRouter