import { AppContext } from "../layoutes/AppContext";
import { useContext, useState } from "react";
import "../styles/Login.css";

const Login = () => {
  const [inputValue, setInputValue] = useState("");
  const { toggleLoggedState } = useContext(AppContext);
  const { isUserLogged } = useContext(AppContext);
  const { userName } = useContext(AppContext);

  const logoutInformation = `${userName} click below for logout`;
  const loginInformation = "Login with name and password";
  const inputs = (handleInputChange) => (
    <div className="inputsContainer">
      <input
        onChange={handleInputChange}
        id="name"
        name="name"
        type="text"
        placeholder="name"
        value={inputValue}
      />
      <br />
      <br />
      <input name="password" type="password" placeholder="password" />
      <label className="testLabel" htmlFor="password">
        "test"
      </label>
      <br />
      <br />
    </div>
  );

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleLogin = () => {
    toggleLoggedState(inputValue);
  };

  const handleLogout = () => {
    toggleLoggedState("");
    setInputValue("");
  };

  return (
    <div className="loginContainer">
      <h5 className="loginInfo">
        {isUserLogged ? logoutInformation : loginInformation}
      </h5>
      {!isUserLogged && inputs(handleInputChange)}
      {isUserLogged && (
        <button className="btn btn-primary btn-sm " onClick={handleLogout}>
          logout
        </button>
      )}
      {!isUserLogged && (
        <button className="btn btn-primary btn-sm " onClick={handleLogin}>
          login{" "}
        </button>
      )}
    </div>
  );
};

export default Login;
