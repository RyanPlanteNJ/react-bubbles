import React, { useState } from "react";
import axiosWithAuth from '../utils/axiosWithAuth';

const Login = (props) => {
  const [credentials, setCredentials] = useState({
    username: '',
    password:''
  })

  const [isLoading, setIsLoading] = useState(false);

  const handleChanges = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const login = e => {
    e.preventDefault();
    setIsLoading(true);
    axiosWithAuth()
    .post("/login", credentials)
    .then(res=>{
      localStorage.setItem("token",res.data.payload);
      setIsLoading(false);
      props.history.push("/bubble-page");
      console.log(res);
    })
    .catch(err=>
      console.error(err.message));  
  };

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit = {login}>
        <input
        type="text"
        name="username"
        value={credentials.username}
        onChange={handleChanges}
      />
      <input 
      type="password"
      name="password"
      value={credentials.password}
      onChange={handleChanges}
      />
      <button>Log In</button>
      </form>
    </div>
  );
};

export default Login;
