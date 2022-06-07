import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { usersData } from "./veriler/users";
import { lessonsData } from "./veriler/lessons";
import Login from "./pages/Login/Login";
import Student from "./pages/Student/Student";
import Admin from "./pages/Admin/Admin";

function App() {
  const [users, setUsers] = useState(usersData);
  const [lessons, setLessons] = useState(lessonsData);
  const [loginInfo, setLoginInfo] = useState({
    isLoggedIn: 0,
    user: undefined,
  });

  return (
    <div>
      {(() => {
        if (loginInfo.isLoggedIn == 1 && loginInfo.user?.role == "OGRENCI") {
          return (
            <Student
              setLoginInfo={setLoginInfo}
              lessons={lessons}
              setUsers={setUsers}
              users={users}
              loginInfo={loginInfo}
            />
          );
        } else if (
          loginInfo.isLoggedIn == 1 &&
          loginInfo.user?.role == "ADMIN"
        ) {
          return (
            <Admin
              setLoginInfo={setLoginInfo}
              lessons={lessons}
              setLessons={setLessons}
            />
          );
        } else {
          return <Login users={users} setLoginInfo={setLoginInfo} />;
        }
      })()}
    </div>
  );
}

export default App;
