import { useContext } from 'react'
import FeedbackContext from '../context/Feedbackcontext'
import Card from './shard/card'

function FeedbackItem({feedback  }) {

const { deleteFeedback , EditText} = useContext(FeedbackContext)


  return (
      
    <Card  >
        <div className=" text-xl w-12 flex items-center justify-center h-12 text-blue-900 bg-pink-400 absolute -top-6 left-10 rounded-full ">{feedback.rate}</div>
        <div className=" text-m  pl-8 flex items-center justify-center  text-gray-400  "> {feedback.text}</div>
        <button onClick={()=>deleteFeedback(feedback.id)}>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 hover:text-red-400 text-slate-500 absolute top-3 right-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" >
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"  />
        </svg >
        </button>
        <button onClick={()=>EditText(feedback)}>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 hover:text-red-400 text-slate-500 absolute top-3 right-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
         <path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
        </button>
    </Card>
  )
}

export default FeedbackItem