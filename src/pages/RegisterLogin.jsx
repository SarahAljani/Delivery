import { useState } from "react";
import LoginForm from "../components/loginRegisterFrorms/LoginForm";
import "../styles/registerLogin.css";
import RegisterForm from "../components/loginRegisterFrorms/RegisterForm";
const RegisterLogin = () => {
  const [loginRegister, setLoginRegister] = useState("login");
  return (
    <div className="main-register-login">
      {loginRegister == "login" ? (
        <LoginForm setLoginRegister={setLoginRegister} />
      ) : (
        <RegisterForm setLoginRegister={setLoginRegister}></RegisterForm>
      )}
    </div>
  );
};

export default RegisterLogin;
