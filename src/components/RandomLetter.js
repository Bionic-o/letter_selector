import { useState, useEffect } from "react"

function RandomLetter () {
    const [letters, setLetters] = useState()
    const LettersArray = [
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
    useEffect (() => {
        setLetters(LettersArray)
    }, [])
    //console.log(letters)
    let oneLetter = LettersArray[Math.floor(Math.random()*LettersArray.length)];
    //console.log(oneLetter)
    
    return (
        <div>
            {oneLetter.letter}
        </div>
    )
}

export default RandomLetter