import React from "react";
import { Link } from "react-router-dom";
const Home1 = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      <p className="headline">use below links to navigate through all pages.</p>
      <ul>
        <li>
          <Link to="/home">Home1</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home1;
