import React from 'react'

const Hero = () => {
  return (
    <div className='hero d-flex flex-column justify-content-center align-items-center my-5'style={{height:"50vh"}}>
        <p className='my-2 colorGray'>Hello I'm Shikhar Nigam</p>
        <h2 className='mb-2'>I am a Front End Web Developer</h2>
        <button className='my-3 btn btn-outline-light'>Download Resume</button>
    </div>
  )
}

export default Hero;