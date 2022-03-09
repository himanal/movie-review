
import Card from './shard/card'

function FeedbackItem({feedback,handleDelete }) {


  return (
      
    <Card  >
        <div className=" text-xl w-12 flex items-center justify-center h-12 text-blue-900 bg-pink-400 absolute -top-4  rounded-full ">{feedback.rate}</div>
        <div className=" text-m  pl-8 flex items-center justify-center  text-gray-400  "> {feedback.text}</div>
        <button onClick={()=>handleDelete(feedback.id)}>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-red-400 absolute top-3 right-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" >
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"  />
        </svg >
        </button>
    </Card>
  )
}

export default FeedbackItem