
const WelcomePage = ({user, setIsLoggedIn}) => {

    const HandleLogout = () => {

        setIsLoggedIn(false)
    }

    return(
        <div className="WelcomePage">
            <h1>Welcome, {user}</h1>
            <button onClick={HandleLogout}>Logout</button>
        </div>
    )
}

export default WelcomePage;