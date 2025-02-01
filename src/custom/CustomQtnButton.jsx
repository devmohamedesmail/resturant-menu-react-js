import React from 'react'

export default function CustomQtnButton({icon,onClick}) {
  return (
   <button onClick={onClick}>
    {icon}
   </button>
  )
}
