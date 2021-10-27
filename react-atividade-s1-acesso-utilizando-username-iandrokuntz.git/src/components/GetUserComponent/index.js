import { useState } from "react/cjs/react.development"
import "./index.css"

const GetUserComponent = ({setUser, setIsLoggedIn}) => {

    const [userInput, setUserInput] = useState("")

    const HandleLogin = () => {
        
        setUser(userInput)
        setIsLoggedIn(true)
    }

    return(
        <div className="FormPage">
            <form>
                <input onChange={(evt) => setUserInput(evt.target.value)} value={userInput}/>
                <button onClick={HandleLogin}>Login with name</button>
            </form>
        </div>
    )
}

export default GetUserComponent