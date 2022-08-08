import React from 'react'

function StopLetter({allLetters}) {
    console.log(allLetters[allLetters.length - 1])
  return (
    <div>{allLetters[allLetters.length - 1]}</div>
  )
}

export default StopLetter