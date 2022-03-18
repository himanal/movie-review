import { useState, createContext } from "react";
import Database from "../component/database/Database";
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext= createContext()
export const FeedbackProvider=({children})=>{
    const [ feedback , setfeedback]= useState(Database)
    const [ EditFeedback, setEditFeedback]= useState({
        item:{},
        edit:false
    })

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
    
       }
   
       const EditText = (item)=>{
           setEditFeedback({
               item,
               edit:true
           })
       }

   return<FeedbackContext.Provider value={{feedback ,deleteFeedback ,addNewFeedback,EditText , EditFeedback}} >
        {children}
    </FeedbackContext.Provider>

}

 export default FeedbackContext