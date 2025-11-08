import React from 'react'

const Container = ({children, className}) => {
  return (
    <div className={`max-w-[1320px] items-center ${className}`}>{children}</div>
  )
}

export default Container