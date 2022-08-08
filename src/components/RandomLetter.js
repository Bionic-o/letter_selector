import { useState, useEffect } from "react"

function RandomLetter ({isToggled}) {
    const lettersArray = [
        {id: 1, letter: "A"},
        {id: 2, letter: "B"},
        {id: 3, letter: "C"},
        {id: 4, letter: "D"},
        {id: 5, letter: "E"},
        {id: 6, letter: "F"},
        {id: 7, letter: "G"},
        {id: 8, letter: "H"},
        {id: 9, letter: "I"},
        {id: 10, letter: "J"},
        {id: 11, letter: "K"},
        {id: 12, letter: "L"},
        {id: 13, letter: "M"},
        {id: 14, letter: "N"},
        {id: 15, letter: "O"},
        {id: 16, letter: "P"},
        {id: 17, letter: "Q"},
        {id: 18, letter: "R"},
        {id: 19, letter: "S"},
        {id: 20, letter: "T"},
        {id: 21, letter: "U"},
        {id: 22, letter: "V"},
        {id: 23, letter: "W"},
        {id: 24, letter: "X"},
        {id: 25, letter: "Y"},
        {id: 26, letter: "Z"},
    ]
    const getAllLetters = lettersArray.map((letterObj) => {return (letterObj.letter)})
    const stringLetters = getAllLetters.toString()
    const [allLetters, setAllLetters] = useState(stringLetters.replaceAll(',', ''))

    /* the useState needs an original value of the whole alphabet,
    so it can render a single random letter right from the start. 
    if the default value is "", it will render single random Letters only,
    when they were "added" to the useState the second time */

    let randomIndex = [Math.floor(Math.random()*getAllLetters.length)];
    let oneLetter = () => getAllLetters[randomIndex]
    //console.log(oneLetter())

    useEffect(() => {
        const interval = setInterval(() => {
            setAllLetters((prevLetter) => prevLetter + oneLetter())
        }, 50);
        return() => clearInterval(interval);
    }, [allLetters])
    console.log(allLetters)
    console.log(isToggled)

    return (
        <div>
            {oneLetter()}
            <hr></hr>
            {allLetters[randomIndex]} 
            {!isToggled && "A"}
        </div>
    )
}

export default RandomLetter

/* let randomIndex = [Math.floor(Math.random()*getAllLetters.length)];
    let oneLetter = () => getAllLetters[randomIndex] */