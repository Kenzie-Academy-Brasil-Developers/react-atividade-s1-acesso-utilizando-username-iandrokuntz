import {useState} from "react"

function GetUserComponent({ setUser, setIsLoggedIn }) {
    const [userInput, setUserInput] = useState("");
  
    function HandleLogin(userInput) {
      let tamanho = userInput.length;
      if (tamanho > 1) {
        setUser(userInput);
        setIsLoggedIn(true);
      }
    }
    return (
      <div>
        <form>
          <h2>Welcome!</h2>
          <p>Insira seu nome para acessar</p>
  
          <input
            type="text"
            value={userInput}
            onChange={(event) => setUserInput(event.target.value)}
            placeholder="Digite aqui seu nome"
          />
          <button onClick={() => HandleLogin(userInput)}>Acessar página</button>
        </form>
      </div>
    );
  }
  
  export default GetUserComponent;
  