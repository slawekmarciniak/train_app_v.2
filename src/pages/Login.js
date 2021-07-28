import { useContext, useState } from "react";
import { AppContext } from "../layoutes/AppContext";

const Login = () => {
  const [inputValue, setInputValue] = useState("");
  const { toggleLoggedState } = useContext(AppContext);
  const { isUserLogged } = useContext(AppContext);
  const { userName } = useContext(AppContext);

  const logoutInformation = `${userName} click button below for logout`;
  const loginInformation = "Enter name and password for login";

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
    <div>
      {isUserLogged ? logoutInformation : loginInformation}
      <br />
      <br />
      {!isUserLogged && (
        <div>
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
          <label htmlFor="password">(use : 'test')</label>
          <br />
          <br />
        </div>
      )}
      {isUserLogged && (
        <button className="btn btn-danger btn-sm " onClick={handleLogout}>
          logout
        </button>
      )}
      {!isUserLogged && (
        <button className="btn btn-danger btn-sm " onClick={handleLogin}>
          login{" "}
        </button>
      )}
    </div>
  );
};

export default Login;
