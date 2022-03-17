import React, { useState } from 'react'
import RatingSelect from './RatingSelect'
import Card from './shard/card'
import { useContext } from 'react'
import FeedbackContext from '../context/Feedbackcontext'

function FeedbackForm({handleAdd}) {
    const [text, settext]= useState('')
    const [message, setMessage]= useState('')
    const [rate, setRating]= useState('')

    const {addNewFeedback } = useContext(FeedbackContext)
    const handleClick = (e)=>{
        if(text === ''){
            setMessage('')
        }else if( text !=='' && text.trim().length <= 10){
            setMessage('please type at least 10 characters')
            
        }else{
            setMessage(null)
        }
        settext(e.target.value)
        
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        if( text.length > 10 && rate){
            const newFeedBackForm={
                text,
                rate
            }
            addNewFeedback(newFeedBackForm);
            settext('')
            setRating()
        }

    }

  return (
    <Card>
        <form onSubmit={handleSubmit} className='w-full flex justify-center items-center flex-col'>
            <h3 className='text-2xl text-gray-500 text-center '>
                rate this movie!
            </h3>
            <RatingSelect select={(e)=>setRating(e) } />
            {message &&<h2 className='text-red-800 text-xl' >{message}</h2>}
            <input type="text" onChange={handleClick}  className=' bg-slate-300 w-96 rounded-xl  pl-4 text-blue-500  hover:bg-slate-100' placeholder='wrrite your opinion!' />
            <button type='submit' className='bg-blue-500 w-20 mt-2 rounded-xl text-teal-400 '>send</button>
        </form>
    </Card>
  )
}

export default FeedbackForm