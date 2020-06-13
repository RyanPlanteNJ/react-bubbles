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
        <label>Username:  <input
        type="text"
        name="username"
        value={credentials.username}
        onChange={handleChanges}
      /></label>
      <label>Password:  <input 
      type="password"
      name="password"
      value={credentials.password}
      onChange={handleChanges}
      /></label>
     
      <div className='button-row'>
        <button type="submit">Log In</button>
      </div>
      </form>
    </div>
  );
};

export default Login;
