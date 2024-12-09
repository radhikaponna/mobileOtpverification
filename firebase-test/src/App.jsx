import React from 'react';
import AuthPage from './components/AuthPage';
import './style.css';

const App = () => {
  return (
    <div className="container">
      <header>
        <h1>Welcome to the App</h1>
      </header>
      <div style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
        <AuthPage />
      </div>
      <footer>
        <p>&copy; 2024 My App</p>
      </footer>
    </div>
  );
};

export default App;
