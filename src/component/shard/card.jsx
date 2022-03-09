import React from 'react'

const Card = ({children}) => {
  return (
    <div className=' w-[30rem] h-44 rounded-xl shadow-xl mb-8 flex justify-center items-center flex-col  shadow-slate-900 relative  mt-8 bg-gray-200 ring-2'>{children}</div>
  )
}

export default Card