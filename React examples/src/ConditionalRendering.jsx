export default function ConditionalRendering({ isLoggedIn }) {
    return (
      <div>
        {isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>}
      </div>
    );
  }