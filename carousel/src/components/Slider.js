import React, { useState } from 'react'
import sliderData from './data'

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0)

  const handleBtn = (index) => {
    if(index < sliderData.length && index >=0) {
      setSlideIndex(index)
    }
  }
  return (
    <div className='slider-container'>
      {sliderData.map((data, i) => {
        return (
          <div className={`slider-wrapper ${slideIndex === i ? 'active' : ''}`} key={i}>
            <div className='slider-item'>
              <span>{data.title}</span>
            </div>
          </div>
        )
      })}
      <div className='slider-btn'>
        <a className='btn left' onClick={()=>{handleBtn(slideIndex-1)}}>❮</a>
        <a className='btn right' onClick={()=>{handleBtn(slideIndex+1)}}>❯</a>
      </div>
      <div className='dots'>
        {[...Array(sliderData.length)].map((_,i) => {
          return (<div key={i} onClick={() => {setSlideIndex(i+1)}}>{i+1}</div>)
        })
        }
      </div>
    </div>
  )
}

export default Slider
