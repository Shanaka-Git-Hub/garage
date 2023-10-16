import React from 'react'
import { useDispatch } from 'react-redux'
import { openNow, colseNow } from '../redux/State'
import { useNavigate } from 'react-router-dom';

export default function ChangOpenClose() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const open = () => {
    dispatch(openNow())
    navigate('/garage/')
  }
  const close = () => {
    dispatch(colseNow())
    navigate('/garage/')
  }
  return (
    <div className='container-fluid d-flex flex-column align-items-center justify-content-around ' style={{ height: '300px' }}>
      <button className='btn btn-success col-10'
        onClick={() => open()}>Open</button>
      <button className='btn btn-secondary col-10'
        onClick={() => close()}>Close</button>
    </div>
  )
}
