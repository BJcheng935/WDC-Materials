import React, { useState } from 'react';

// SimpleButton Component
function SimpleButton() {
  return <button onClick={() => alert('This is a simple button 👀')}>Simple Button</button>;
}

// StyledButton Component
function StyledButton() {
  const buttonStyle = {
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px',
    borderRadius: '5px',
  };

  return <button style={buttonStyle} onClick={() => alert('This is a styled button 😉')}>Styled Button</button>;
}

// ConditionalRendering Component
function ConditionalRendering({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>}
    </div>
  );
}

// Counter Component
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}

// Greeting Component
function Greeting({ name }) {
  return <h2>Hello, {name}!</h2>;
}

// Main App Component
export function App() {
  const [login, setLogin] = useState(false); // Initialize with false (logged out)

  return (
    <div className='App'>
      <h1>React Basics</h1>
      <SimpleButton />
      <StyledButton />
      {/* Don't worry about this, it's just a separator
        to help see things more clear */}
      <div className='separator'></div>

      <ConditionalRendering isLoggedIn={login} />
      {/* Conditional Login/Logout Button */}
      {login ? (
        <button onClick={() => setLogin(false)}>Logout</button>
      ) : (
        <button onClick={() => setLogin(true)}>Login</button>
      )}
      <div className='separator'></div>
       
      <Counter />
      <div className='separator'></div>

      <Greeting name="Alice" />
      <Greeting name="Bob" />

      
    </div>
  );
}
