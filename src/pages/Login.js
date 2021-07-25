import { useContext } from "react";
import { AppContext } from "../layoutes/AppContext";

const LoginInputs = () => {
  return (
    <>
      <input id="name" name="name" type="text" placeholder="name" />

      <br />
      <br />
      <input name="password" type="password" placeholder="password" />
      <label htmlFor="password">(use : 'test')</label>

      <br />
      <br />
    </>
  );
};

const Login = () => {
  const { toggleLoggedState } = useContext(AppContext);
  const { isUserLogged } = useContext(AppContext);
  const loginButtonInformation = isUserLogged ? "logout" : "login";
  const loginInformation = isUserLogged
    ? "click button below for logout"
    : "enter your name, password & click login button";

  return (
    <div>
      <p>{loginInformation}</p>
      {!isUserLogged && <LoginInputs />}
      <button className="btn btn-danger btn-sm " onClick={toggleLoggedState}>
        {loginButtonInformation}
      </button>
    </div>
  );
};

export default Login;
