import React from 'react'
import '../../App.css';
import background from "../../assets/mathBackground.svg";

const ThankYou = () => {
  return (
    <div
      className="bg-cover bg-center h-full"
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: 'cover',
      }}
    >
    <div className="min-h-screen bg-math-background bg-cover flex items-center justify-center relative">
      <div className="text-white text-center">
        <h1 className="text-4xl font-bold">Thank You!</h1>
        <p className="text-lg my-10 mx-44">
          You have successfully completed the 3 levels, <br /> and now <span className='text-green-400'>you should be able to use the values <br /> provided by Pascal's Triangle  to find the binomial coefficients  <br /> of a positive integral.</span> 
        </p>
        <div className="animate-bounce">
            <span role="img" className='text-6xl' aria-label="Smiley Emoji">😃🎉</span>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ThankYou