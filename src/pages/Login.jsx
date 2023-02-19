import { useState } from "react";
import LoginForm from "../components/LoginForm";

function Login() {
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <>
      <div className="position-relative vw-100 vh-100 fullback">
        <div className="position-absolute top-50 start-50 translate-middle ">
          <img src="/icon.png" alt="" className="position-absolute start-50 translate-middle icon" />
          {errorMessage !== "" && <div className="position-absolute start-50 translate-middle p-1 register-message">{errorMessage}</div>}
          <LoginForm setErrorMessage={setErrorMessage} />
        </div>
      </div>
    </>
  );
}

export default Login;
