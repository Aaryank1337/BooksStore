import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import './styling/Home.css'; // Import CSS for styling

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to the BookStore</h1>
        <p>Your one-stop shop for all kinds of books!</p>
        <Link to="/books"> {/* Wrap the button with Link */}
          <button className="btn-explore">Explore Books</button>
        </Link>
      </div>
      <div className="featured-section">
        <h2>Featured Books</h2>
        <p>Discover our collection of best-selling books handpicked just for you!</p>
        {/* You can add a carousel or list of featured books here */}
      </div>
    </div>
  );
};

export default Home;
