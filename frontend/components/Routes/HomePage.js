// Home.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

function Home() {
  return (
    <div>
      <h2>Welcome to the Pokemon Card Finder!</h2>
      <Link to="/search">Go to Search</Link> {/* Link to SearchPage */}
    </div>
  );
}

export default Home;
