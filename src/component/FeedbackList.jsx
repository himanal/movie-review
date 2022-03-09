import FeedbackItem from "./FeedbackItem"

const feedbackList = ({feedback ,handleDelete }) => {
    console.log(feedback)    
  if( !feedback || feedback.length===0){
      return <>
            <h1  className='text-red-900'> there is any data here</h1>
      </>
  } 
  return<>
  {feedback.map((item)=>(
     <FeedbackItem key={item.id} feedback={item} handleDelete={handleDelete} />
  ))}
  </>
}

export default feedbackList