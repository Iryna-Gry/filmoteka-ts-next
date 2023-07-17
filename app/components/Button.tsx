'use client'
import React from 'react'

function Button({title,onClick}:{title:string,  onClick?: React.MouseEventHandler}) {
  return (
      <button type='button' className="h-8 w-20" onClick={onClick}>{title}</button>
  )
}

export default Button