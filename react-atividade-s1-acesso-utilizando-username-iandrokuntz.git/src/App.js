import GetUserComponent from './components/GetUserComponent';
import WelcomePage from './components/WelcomePage';
import { useState } from 'react';
import './App.css';

function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const [user, setUser] = useState("")

  return (

    <div className="App">

      {isLoggedIn ? (
      <WelcomePage user={user} setIsLoggedIn={setIsLoggedIn}/>
      
      ) 
        : (  
        <GetUserComponent setUser={setUser} setIsLoggedIn={setIsLoggedIn}/>
      )
  }
    </div>
  );
}

export default App;
