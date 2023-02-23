import React, { useState } from "react";

import "./styles/loginform.css";

const LoginForm = ({ last_username, error, csrf_token }) => {
  const [user, setUser] = useState({ email: last_username, password: "" });

  const handleChange = (e) => {
    const { value, name } = e.target;
    console.log(e.target);
    setUser((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className="form-container">
      <form className="card-form" method="post">
        {error && <div className="alert alert-danger">{error}</div>}
        <h1 className="heading-h1">Please sign in</h1>
        <div className="form-group">
          <label htmlFor="inputEmail">Email</label>
          <input
            type="email"
            value={user.email}
            name="email"
            id="inputEmail"
            className="form-control"
            autoComplete="email"
            onChange={handleChange}
            required
            autoFocus
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputPassword">Password</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            id="inputPassword"
            className="form-control"
            autoComplete="current-password"
            required
          />
        </div>
        <input type="hidden" name="_csrf_token" value={csrf_token} />
        <div>
          <label>
            <input type="checkbox" name="_remember_me" /> Remember me
          </label>
        </div>
        <button className="btn-gradient" type="submit">
          Sign in
        </button>
        <div>Don't have an account yet? <a href="/register">Create an account</a></div>
      </form>
    </div>
  );
};

export default LoginForm;
