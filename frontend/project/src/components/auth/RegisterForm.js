import React, { useState } from 'react';
import InputField from '../common/InputField';
import NeighborhoodSelector from '../common/NeighborhoodSelector';
import SocialLoginButtons from '../common/SocialLoginButtons';
import { EnvelopeIcon, LockIcon, ConfirmIcon } from '../../assets/icons';
import './RegisterForm.css';

function RegisterForm({ onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [neighborhood, setNeighborhood] = useState('Downtown');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLoginSuccess?.();
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <h2 className="register-form__title">Join the Community</h2>
      <p className="register-form__subtitle">Create an account to connect with neighbors.</p>

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
      <InputField
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={setConfirmPassword}
        icon={<ConfirmIcon />}
      />

      <NeighborhoodSelector value={neighborhood} onChange={setNeighborhood} />

      <button type="submit" className="register-form__submit">
        Create Account
      </button>

      <SocialLoginButtons />

      <p className="register-form__legal">
        By continuing, you agree to our{' '}
        <a href="/terms" className="register-form__link">Terms of Service</a>
        {' '}and{' '}
        <a href="/privacy" className="register-form__link">Privacy Policy</a>.
      </p>
    </form>
  );
}

export default RegisterForm;
