import React, { useState } from "react";

import "./Login.css";

const Login = (props) => {
  const { setLoginInfo, users } = props;

  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    const user = users.find((x) => x.number === number);
    if (user != undefined) {
      if (password === user.password) {
        console.log("Giris Basarili!");
        setLoginInfo({
          isLoggedIn: 1,
          user: user,
        });
      } else {
        alert("Yanlis numara veya sifre!");
      }
    } else {
      alert("Kullanici bulunamadi!");
    }
  };

  return (
    <div>
      <div className="form">
        <input
          className="input"
          placeholder="numaraniz"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <input
          className="input"
          type="password"
          placeholder="sifreniz"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="button" onClick={() => login()}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
