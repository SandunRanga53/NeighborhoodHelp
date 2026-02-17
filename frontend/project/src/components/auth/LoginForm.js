import React, { useState } from 'react';
import InputField from '../common/InputField';
import { EnvelopeIcon, LockIcon } from '../../assets/icons';
import './LoginForm.css';

function LoginForm({ onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLoginSuccess?.();
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2 className="login-form__title">Welcome back</h2>
      <p className="login-form__subtitle">Sign in to connect with your neighborhood.</p>

      <InputField
        type="email"
        name="email"
        placeholder="alex@example.com"
        value={email}
        onChange={setEmail}
        icon={<EnvelopeIcon />}
      />
      <InputField
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={setPassword}
        icon={<LockIcon />}
      />

      <button type="submit" className="login-form__submit">
        Log In
      </button>

      <p className="login-form__legal">
        By continuing, you agree to our{' '}
        <a href="/terms" className="login-form__link">Terms of Service</a>
        {' '}and{' '}
        <a href="/privacy" className="login-form__link">Privacy Policy</a>.
      </p>
    </form>
  );
}

export default LoginForm;
