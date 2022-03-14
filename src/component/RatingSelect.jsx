import React, {  useState } from 'react'

const RatingSelect = ({select}) => {
    const [selected, setSelected]=useState()

    
    const handleChange=(e)=>{
        setSelected(+e.target.value)
        select(+e.target.value)
    }
   
     
  return (

       <div className='flex flex-col justify-center items-center'>
           <input type="range" name='rating' id='rateVloume' min={1} max={10.0} onChange={handleChange} />
           <label htmlFor="rateVloume" className='text-2xl text-red-400'>{selected}</label>
           
       </div>
  )
}

export default RatingSelect