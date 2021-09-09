function WelcomePage({user, setIsLoggedIn}){

    function HandleLogout(){

        return setIsLoggedIn(false);
    }

    return(

        <div className="Logged">
        <h1>Welcome, {user}!</h1>
        <button onClick={HandleLogout}>Logout</button>
        </div>

    )

}

export default WelcomePage;