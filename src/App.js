import { useState } from "react";
import './App.css'

import {BrowserRouter as Router ,Routes, Route } from "react-router-dom";

// component
import Header from "./component/header";
import Database from "./component/database/Database";
import FeedbackList from "./component/FeedbackList";
import FeedbackStatus from "./component/FeedbackStatus";
import FeedbackForm from "./component/FeedbackForm";
import About from "./pages/About";
import { FeedbackProvider } from "./context/Feedbackcontext";


function App() {

  const [feedback,setfeedback]=useState(Database)


    

  return (
    <FeedbackProvider>

    <Router>
      <div className=" w-full  flex  h-full  flex-col items-center  justify-center  ">
      <Header />
     <Routes >
      <Route  path="/" element={ 
        <>
      <FeedbackForm/>
       <FeedbackStatus feedback={feedback}/> 
        <FeedbackList />
      </>
      }/>
      <Route path="About" element={<About/>}/>
      </Routes>
      </div>
    </Router>
      </FeedbackProvider>
  );
}

export default App;
