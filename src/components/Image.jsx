import React from 'react'

const Image = ({ImgSrc, imgAlt, className}) => {
  return (
   <img src={ImgSrc} alt={imgAlt} className={`${className}`}/>
  )
}

export default Image