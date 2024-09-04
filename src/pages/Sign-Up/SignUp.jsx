
import React, { useState } from 'react';
import styles from './SignUp.module.scss';

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [formErrors, setFormErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let errors = {};

    if (!formData.firstName) errors.firstName = 'First Name is required';
    if (!formData.lastName) errors.lastName = 'Last Name is required';
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      errors.email = 'Email is not valid';
    }
    if (!formData.password) errors.password = 'Password is required';
    if (!formData.confirmPassword) {
      errors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    if (Object.keys(errors).length === 0) {
      
      console.log('Form submitted successfully', formData);
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.signUpBox}>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputBox}>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <label>First Name</label>
            {formErrors.firstName && <span className={styles.error}>{formErrors.firstName}</span>}
          </div>
          <div className={styles.inputBox}>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            <label>Last Name</label>
            {formErrors.lastName && <span className={styles.error}>{formErrors.lastName}</span>}
          </div>
          <div className={styles.inputBox}>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label>Email</label>
            {formErrors.email && <span className={styles.error}>{formErrors.email}</span>}
          </div>
          <div className={styles.inputBox}>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <label>Create New Password</label>
            {formErrors.password && <span className={styles.error}>{formErrors.password}</span>}
          </div>
          <div className={styles.inputBox}>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            <label>Retype Password</label>
            {formErrors.confirmPassword && <span className={styles.error}>{formErrors.confirmPassword}</span>}
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;