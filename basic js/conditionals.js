if (loggedIn) {
  console.log("Welcome!");
} else {
  console.log("Please login");
}

// or inline (React JSX loves this)
{loggedIn && <p>Welcome!</p>}
