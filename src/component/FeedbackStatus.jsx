import React from 'react'

function FeedbackStatus({feedback}) {
   const review = feedback.length
   const rating = feedback.reduce((acc, cur)=>{
        return acc + cur.rate
   },0)/feedback.length
  

  return (
    <div className='flex justify-around w-full'>
        <h3 className='text-2xl'>{feedback.length === 1 ? "review" : "reviews"}:{review} </h3>    
        <h3 className='text-2xl'>rating: {rating} </h3>    
    </div>
  )
}

export default FeedbackStatus