import React from 'react';

function LoginForm() {
  return (
    <div className="login-form">
      <h3 className="login-header">Log In</h3>
      <input type="text" placeholder="Username" className="input-field" />
      <input type="password" placeholder="Password" className="input-field" />
      <button className='cancel'>cancel</button>
    </div>
  );
}

export default LoginForm;
