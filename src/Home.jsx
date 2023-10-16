import React, { useEffect } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import CarouselOne from './components/CarouselOne'
import SliderOne from './components/sliders/SliderOne'
import SideNavBar from './components/SideNavBar'
import Cards from './components/Cards'
import './Home.css'
import Open from './settings/Open'
import Close from './settings/Close'
import {useSelector } from 'react-redux'


export default function Home() {
  const status=useSelector(state=> state.status)
  useEffect(()=>{
    console.log(status);
  },[status])
  const openClose=()=>{
    if(status){
      return <Open/>
    }
    return <Close/>
  }
  return (
    <div className='container-fluid' style={{height:'100vh'}}>
        <NavBar/>
        <div className="status">
          {
             openClose()
          }
        </div>
        <SideNavBar/>
      <SideNavBar/>
      <CarouselOne/>
      <div className="card-outer" id='card-outer'>
        <Cards/>
        <Cards/>
        <Cards/>
      </div>
      <div className="location d-flex align-items-center justify-content-center">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d734.4264592496446!2d80.21614265374176!3d8.162460663457468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afce5f4d7ad9287%3A0x33d062417de9f979!2sKENT%20Water%20Purifiers!5e1!3m2!1sen!2slk!4v1697457467960!5m2!1sen!2slk" 
         style={{border:'0'}} loading="lazy" referrerPolicy={'no-referrer-when-downgrade'}
         width={'100%'} height={'300px'}
         ></iframe>
      </div>
      <div className="footer">

      </div>
    </div>
  )
}