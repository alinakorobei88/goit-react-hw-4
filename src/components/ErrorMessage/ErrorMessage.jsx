import React from 'react';
import './ErrorMessage.module.css';

const ErrorMessage = ({ message }) => (
    <div className="ErrorMessage">
      <p>{message}</p>
    </div>
  );
  
  export default ErrorMessage;