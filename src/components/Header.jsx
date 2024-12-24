import { Button, Input } from "@mantine/core";
import "../styles/header.css";
import { RiNotification4Line } from "react-icons/ri";
import { FiShoppingCart } from "react-icons/fi";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
// import { Button } from "@mantine/core";
const Header = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  return (
    <header>
      <div className="logo">
        <h1 className="p1">Welcome</h1>
        <h1 className="p2">Monsireur</h1>
      </div>

      <Input
        leftSection={<FiSearch className="btn-icon" />}
        placeholder="Search"
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
        className="search"
        styles={{
          input: {
            height: "42px", // Set height directly
            borderRadius: "33.49px", // Set border radius
          },
        }}
      />
      <div className="AuthButtons">
        <Button variant="filled" color="red" radius="lg" className="login-btn" onClick={()=>{navigate("/login")}}>
          Login In
        </Button>
        <Button variant="filled" radius="lg" className="header-btns">
          <RiNotification4Line className="btn-icon" />
        </Button>
        <Button variant="filled" radius="lg" className="header-btns">
          <FiShoppingCart className="btn-icon" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
