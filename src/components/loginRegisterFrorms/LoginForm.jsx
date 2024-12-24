import { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { PasswordInput, Button, Checkbox, Group } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useMediaQuery } from "@mantine/hooks";
import { useDispatch } from "react-redux";
import { updateLogin } from "../../redux/loginSlice";
import { useNavigate } from "react-router-dom";
import "../../styles/registerLogin.css";

const LoginForm = ({ setLoginRegister }) => {
  const isSmallScreen = useMediaQuery("(max-width: 500px)");
  const [phone, setPhone] = useState("");
  const form = useForm({
    initialValues: {
      email: "",
      termsOfService: false,
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log("Form submitted!");
    console.log("Phone:", phone);
    console.log("Email:", form.values.email);
    dispatch(updateLogin(true));
    navigate("/");
  };

  return (
    <div className="paper-register-login">
      <div className="logo-login-main">
        <h1 className="logo-login" id="logo-login-p1">
          Monsireur
        </h1>
        <h1 className="logo-login" id="logo-login-p2">
          Wael
        </h1>
      </div>

      <h1 className="login-h1">Login</h1>
      <p className="para1">Enter your phone number and password to log in </p>
      <form onSubmit={form.onSubmit(handleSubmit)} className="auth-form">
        <PhoneInput
          defaultCountry="sy"
          value={phone}
          onChange={(phone) => setPhone(phone)}
          className="input-field"
          style={{ width: "100%" }}
        />
        <PasswordInput placeholder="Password" radius="10px" />
        <div className="remember-forget">
          <Checkbox
            label="Remember me"
            styles={{
              input: {
                ":checked": {
                  backgroundColor: "rgba(50, 100, 200, 1)", // Customize background color when checked
                  borderColor: "rgba(50, 100, 200, 1)", // Border color when checked
                },
              },
              label: {
                fontSize: isSmallScreen ? "12px" : "15px",
                fontWeight: isSmallScreen ? "500" : "600",
                color: "rgba(108, 114, 120, 1)",
              },
            }}
            {...form.getInputProps("termsOfService", { type: "checkbox" })}
          />
          <a className="forget" href="/forgot-password">
            Forgot Password?
          </a>
        </div>
        <Group justify="center">
          <Button type="button" onClick={handleSubmit} className="submit-btn">
            Login
          </Button>
        </Group>
      </form>
      <div className="switch">
        <p className="switch-text">Don’t have an account?</p>
        <p className="switch-link" onClick={() => setLoginRegister("register")}>
          Sign Up
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
