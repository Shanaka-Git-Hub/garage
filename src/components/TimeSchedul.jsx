import React from 'react'
import './TimeSchedule.css'

export default function TimeSchedul() {
  return (
    <div className='container-fluid d-flex align-items-center justify-content-around time-schedule' style={{height:'60vh'}}>
       <table className='table table-hover w-75 ms-5 '>
        <thead>
            <tr>
                <th>Day</th>
                <th>Open</th>
                <th>Close</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Sunday</td>
                <td>8.00am</td>
                <td>6.00pm</td>
            </tr>
            <tr>
                <td>Monday</td>
                <td>8.00am</td>
                <td>6.00pm</td>
            </tr>
            <tr>
                <td>thuseday</td>
                <td>8.00am</td>
                <td>6.00pm</td>
            </tr>
            <tr>
                <td>Wendsday</td>
                <td>8.00am</td>
                <td>6.00pm</td>
            </tr>
            <tr>
                <td>Thursday</td>
                <td>8.00am</td>
                <td>6.00pm</td>
            </tr>
            <tr>
                <td>Friday</td>
                <td>8.00am</td>
                <td>6.00pm</td>
            </tr>
            <tr>
                <td>Saturday</td>
                <td>8.00am</td>
                <td>6.00pm</td>
            </tr>
        </tbody>
       </table>
    </div>
  )
}