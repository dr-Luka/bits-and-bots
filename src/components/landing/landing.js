import { Tabs, Tab } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function Landing() {
  const history = useHistory();
  const usersLocalStorage = JSON.parse(localStorage.getItem("Users"));
  const [users, setUsers] = useState(
    usersLocalStorage ? usersLocalStorage : []
  );

  const defaultForm = { username: "", password: "" };

  const [loginForm, setLoginForm] = useState(defaultForm);

  const [registerForm, setRegisterForm] = useState(defaultForm);

  const handleLoginChange = (e) => {
    setLoginForm((oldForm) => ({
      ...oldForm,
      [e.target.name]: e.target.value,
    }));
  };

  const handleChange = (e) => {
    setRegisterForm((oldForm) => ({
      ...oldForm,
      [e.target.name]: e.target.value,
    }));
  };

  const registerUser = (e) => {
    e.preventDefault();
    if (users.find((user) => user.username === registerForm.username)) return 0;
    setUsers((oldUsers) => [...oldUsers, registerForm]);
    setRegisterForm(defaultForm);
  };

  const loginUser = (e) => {
    e.preventDefault();
    users.forEach((user) => {
      if (user.username === loginForm.username) {
        if (user.password === loginForm.password) {
          console.log("Logged in!");
          localStorage.setItem("LogedIn", true);
          history.push("/browse");
        } else {
          console.log("Wrong password!");
        }
      }
    });
  };

  useEffect(() => {
    localStorage.setItem("Users", JSON.stringify(users));
  }, [users]);

  return (
    <div className="page">
      <video muted autoPlay loop id="landing-bg">
        <source
          src="https://res.cloudinary.com/learnx-no/video/upload/v1647791263/landing-bg_hdewue.mp4"
          type="video/mp4"
        />
      </video>
      <div className="form-container">
        <Tabs defaultActiveKey="Login" id="landing-tabs" className="mb-3">
          <Tab eventKey="Login" title="Login" className="tab-login">
            <form className="landing-form" onSubmit={(e) => loginUser(e)}>
              <input
                type="text"
                placeholder="Username"
                id="username-login"
                name="username"
                value={loginForm.username}
                onChange={(e) => handleLoginChange(e)}
              />
              <input
                type="password"
                placeholder="Password"
                id="password-login"
                name="password"
                value={loginForm.password}
                onChange={(e) => handleLoginChange(e)}
              />
              <button
                id="login-button"
                type="submit"
                className="card-button read-more"
              >
                Log In
              </button>
            </form>
          </Tab>
          <Tab eventKey="Register" title="Sign Up">
            <form className="landing-form" onSubmit={(e) => registerUser(e)}>
              <input
                type="text"
                placeholder="Username"
                id="username-register"
                name="username"
                value={registerForm.username}
                onChange={(e) => handleChange(e)}
              />
              <input
                type="password"
                placeholder="Password"
                id="password-register"
                name="password"
                value={registerForm.password}
                onChange={(e) => handleChange(e)}
              />
              <button
                id="register-button"
                type="submit"
                className="card-button read-more"
              >
                Sign Up
              </button>
            </form>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
export default Landing;
