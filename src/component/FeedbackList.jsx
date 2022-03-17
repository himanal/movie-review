import { useContext } from "react"
import FeedbackContext from "../context/Feedbackcontext"
import FeedbackItem from "./FeedbackItem"

const FeedbackList = ({ handleDelete }) => {
  const {feedback} =useContext(FeedbackContext)
    
  if( !feedback || feedback.length===0){
      return <>
            <h1  className='text-red-900'> There is no ,  any data here</h1>
      </>
  } 
  return<>
  {feedback.map((item)=>(
     <FeedbackItem key={item.id} feedback={item}  />
  ))}
  </>
}

export default FeedbackList