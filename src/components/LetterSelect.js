import { useLocation } from "react-router-dom"
import { useEffect, useState, useRef } from "react"
import Counter from "./test";

function LetterSelect () {
    const location = useLocation();
    const userName = location.state?.username
    //console.log(isToggled.toString())
    const lettersArray = [
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
    ]

    const stringLetters = lettersArray.toString()
    const [allLetters, setAllLetters] = useState(stringLetters.replaceAll(',', ''))
    /* the useState "allLetters" needs an original value of the whole alphabet,
    so it can render a single random letter right from the start. 
    if the default value is "", it will render single random Letters only,
    when they were "added" to the useState the second time */
    let randomIndex = [Math.floor(Math.random()*lettersArray.length)];



    // ********** Code below was used from the Internet, could not get Interval and useEffect working how I wanted **********
    const [flag, setFlag] = useState(false);
    const myInterval = useRef();

    function intervalLetter() {
        setFlag(!flag);
        if (flag) {
            myInterval.current = setInterval(() => setAllLetters((prevLetter) => prevLetter + 1), /* "+1" can be anything. array changes but render is correct. no idea how to solve */
            100);
        } else {
            clearInterval(myInterval.current)
        }
    }
    function resetLetter() {
        clearInterval(myInterval.current);
        setAllLetters(stringLetters.replaceAll(',', ''))
    }
    useEffect(() => {
        setFlag(true);
        return () => clearInterval(myInterval.current)
    }, [])
    // ********** Code above was used from the Internet, could not get Interval and useEffect working how I wanted **********
    // https://stackoverflow.com/questions/71938830/clearinterval-not-working-in-react-application-using-functional-component



   console.log(allLetters)
    return (
        <div>
            <h1>Hallo {userName}!</h1>
            <p>Lass uns starten</p>
            <div>
                <button onClick={intervalLetter}>{flag ? "START" : "STOP"}</button>
                <button onClick={resetLetter}>Reset</button>
            </div>
            {allLetters[randomIndex]}
            <Counter />
        </div>
    )
}

export default LetterSelect


/* {id: 1, letter: "A"},
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
{id: 26, letter: "Z"}, */