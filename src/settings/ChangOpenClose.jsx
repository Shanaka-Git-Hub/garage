import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { openNow, colseNow } from '../redux/State'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

export default function ChangOpenClose() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  

  const open = () => {
    axios({
      url:'https://coconut-heliotrope-microceratops.glitch.me/setStatus',
      method:'put',
      headers:{_id:'6530c174e9faa87aca67d3a9'},
      data:{status:'open'}
    }).then(resp=>{
      toast('Service was Opened')
    }).catch(err=>{
      console.log(err);
    })
    navigate('/garage/')
  }
  const close = () => {
    axios({
      url:'https://coconut-heliotrope-microceratops.glitch.me/setStatus',
      method:'put',
      headers:{_id:'6530c174e9faa87aca67d3a9'},
      data:{status:'close'}
    }).then(resp=>{
      toast('Service was Closed')
    }).catch(err=>{
      console.log(err);
    })
    navigate('/garage/')
  }
  return (
    <div className='container-fluid d-flex flex-column align-items-center justify-content-around ' style={{ height: '300px' }}>
      <button className='btn btn-success col-10'
        onClick={() => open()}>Open</button>
      <button className='btn btn-secondary col-10'
        onClick={() => close()}>Close</button>
        <ToastContainer/>
    </div>
  )
}
