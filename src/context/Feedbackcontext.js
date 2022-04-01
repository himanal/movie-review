import { useState, createContext, useEffect } from "react";
// import Database from "../component/database/Database";
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";


const FeedbackContext= createContext()

export const FeedbackProvider=({children})=>{
  
  const [ feedback , setfeedback]= useState([])
  const [ EditFeedback, setEditFeedback]= useState({
    item:{},
    edit:false
  })
  
  useEffect(()=>{
    fectData()
  },[])
  const fectData=async()=>{
    const respone =await axios.get('http://localhost:4000/database')
    let database = await respone.data
     setfeedback(database)
  }

      const deleteFeedback =async (id)=>{
        if(window.confirm('are you sure')){
            await axios.delete(`http://localhost:4000/database/${id}`)
            setfeedback(
            feedback.filter((item)=> item.id !== id)
            )
          }


        
      }
      const addNewFeedback =async(e)=>{

        e.id=uuidv4()
        await axios.post('http://localhost:4000/database',e)
        setfeedback([e, ...feedback])
    
       }
       const upDateFeedback =async( id , upDate)=>{

        const respone = await axios.put(`http://localhost:4000/database/${id}`,upDate)
        setfeedback(
          feedback.map((item)=>(
          item.id=== id ? {...item , ...upDate} : item)
        ))
       }
   
       const EditText = (item)=>{
           setEditFeedback({
               item,
               edit:true
           })
           
       }
       
       

   return<FeedbackContext.Provider value={{feedback ,deleteFeedback ,addNewFeedback,EditText , EditFeedback , upDateFeedback}} >
        {children}
    </FeedbackContext.Provider>

}

 export default FeedbackContext