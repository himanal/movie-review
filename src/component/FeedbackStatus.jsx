import React from 'react'

function FeedbackStatus({feedback}) {
   const review = feedback.length
   const rating = feedback.reduce((acc, cur)=>{
        return acc + cur.rate
   },0)
  

  return (
    <div className='flex justify-around w-full'>
        <h3>{feedback.length === 1 ? "review" : "reviews"}:{review} </h3>    
        <h3>rating: {rating} </h3>    
    </div>
  )
}

export default FeedbackStatus