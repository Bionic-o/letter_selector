import { useState, useEffect } from "react"

function RandomLetter ({lettersArray}) {
    
    const getAllLetters = lettersArray.map((letterObj) => {return (letterObj.letter)})
    const stringLetters = getAllLetters.toString()
    const [allLetters, setAllLetters] = useState(stringLetters.replaceAll(',', ''))

    /* the useState "allLetters" needs an original value of the whole alphabet,
    so it can render a single random letter right from the start. 
    if the default value is "", it will render single random Letters only,
    when they were "added" to the useState the second time */

    let randomIndex = [Math.floor(Math.random()*getAllLetters.length)];
    let oneLetter = () => getAllLetters[randomIndex]
    //console.log(oneLetter())

    useEffect(() => {
        const interval = setInterval(() => {
            setAllLetters((prevLetter) => prevLetter + oneLetter())
        }, 250);
        return() => clearInterval(interval);
    }, [oneLetter])
    console.log(allLetters)
    console.log(allLetters[allLetters.length - 1])
    
    return (
        <div>
            {allLetters[randomIndex]} 
        </div>
    )
}

export default RandomLetter

/* let randomIndex = [Math.floor(Math.random()*getAllLetters.length)];
    let oneLetter = () => getAllLetters[randomIndex] */