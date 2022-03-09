import { useState } from "react";
import "./App.css";

import Header from "./component/header";
import FeedbackList from "./component/FeedbackList";
import Database from "./component/database/Database";

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

      <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
    </div>
  );
}

export default App;
