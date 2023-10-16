import React from 'react'
import './App.css'
import NavBar from './components/NavBar'
import CarouselOne from './components/CarouselOne'
import SliderOne from './components/sliders/SliderOne'



export default function App() {
  return (
    <div className='container-fluid' style={{height:'100vh'}}>
      <NavBar/>
      <CarouselOne/>
    </div>
  )
}
