import React from 'react'

function FeedbackStatus({feedback}) {
   const review = feedback.length
   let rating = feedback.reduce((acc, cur)=>{
        return acc + cur.rate
   },0)/feedback.length
  
  rating =parseFloat(rating).toFixed(1)
  return (
    <div className='flex justify-around w-full'>
        <h3 className='text-2xl'>{feedback.length === 1 ? "review" : "reviews"}:{review} </h3>    
        <h3 className='text-2xl'>rating: {isNaN(rating) ? 0 :  rating} </h3>    
    </div>
  )
}

export default FeedbackStatus