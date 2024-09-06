import { useState } from "react"
import Button from "../../components/Button"
import './Home.css'



function Home(){
    var count = 0 
    var name = "Manish"
  
  
    // const [number,setNumber] = useState(0)
    const state = useState({})
    const number = state[0]
    const setNumber = state[1]
  

    const [name,setName] = useState(true)
    

    const increase = ()=>{
        setNumber(1000)
        number = 1000
    }
    const decrease = ()=>{
        setNumber(number-1)
    }
 
    return(
        <>
            <h1>{number}</h1>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>

        </>
    )
}

export default Home



