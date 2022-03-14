import { useState } from "react";
import './App.css'
import { v4 as uuidv4 } from 'uuid';

// component
import Header from "./component/header";
import Database from "./component/database/Database";
import FeedbackList from "./component/FeedbackList";
import FeedbacjStatus from "./component/FeedbackStatus";
import FeedbackForm from "./component/FeedbackForm";

function App() {

  const [feedback,setfeedback]=useState(Database)

  const deleteFeedback =(id)=>{
    if(window.confirm('are you sure')){

      setfeedback(
        feedback.filter((item)=> item.id !== id)
        )
      }
  }
    const addNewFeedback =(e)=>{
     e.id=uuidv4()
     setfeedback([e, ...feedback])
     console.log(e)
    }

  return (
    <div className=" w-full  flex  h-full  flex-col items-center  justify-center  ">
      <Header />
      <FeedbackForm handleAdd={addNewFeedback}/>
      <FeedbacjStatus feedback={feedback}/>
      <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
    </div>
  );
}

export default App;
