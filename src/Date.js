import React from 'react'

export default function D() {
    let dateObj = new Date()
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const months = ['January', 'February', 'March', 'April', 'May', 'june', 'July', 'August', 'September', 'October', 'November', 'December']
     const day = days[dateObj.getDay()]
     const month = months[dateObj.getMonth()]
     const date = dateObj.getUTCDate()
     const year = dateObj.getUTCFullYear()
    return <h4 className='date'>{day} , {month} , {date} , {year}</h4>
   
}
