import React from 'react';
import { Link } from 'react-router-dom';

const Home = props => (
  <div>
    <h1>Home Page</h1>
    <ul>
      <li>
        <Link to="1">Page 1</Link>
      </li>
      <li>
        <Link to="2">Page 2</Link>
      </li>
      <li>
        <Link to="3">Page 3</Link>
      </li>
    </ul>
  </div>
);

export default Home;
