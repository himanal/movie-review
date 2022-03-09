import React from 'react'

function Button({children, type ,version}) {
  return (
    <button type={type}  className={`ring-2 bg-${version}-500 hover:bg-red-400`}>{children}</button>
  )
}

export default Button