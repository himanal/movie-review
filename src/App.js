import { useState } from "react";

// component
import Header from "./component/header";
import Database from "./component/database/Database";
import FeedbackList from "./component/FeedbackList";
import FeedbacjStatus from "./component/FeedbackStatus";

function App() {

  const [feedback,setfeedback]=useState(Database)

  const deleteFeedback =(id)=>{
    if(window.confirm('are you sure')){

      setfeedback(
        feedback.filter((item)=> item.id !== id)
        )
      }
  }
  return (
    <div className=" w-full  flex  h-full  flex-col items-center  justify-center  ">
      <Header />
      <FeedbacjStatus feedback={feedback}/>
      <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
    </div>
  );
}

export default App;
