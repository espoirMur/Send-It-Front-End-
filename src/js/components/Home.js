import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <body>
        <header>
          <div className="wrapper">
            <ul className="nav-area">
              <li>
                {" "}
                <a href="#">About</a>
              </li>
              <li>
                {" "}
                <a href="#">Contact Us</a>
              </li>
              <li>
                {" "}
                <a href="./login.html">Register</a>
              </li>
            </ul>
          </div>
          <div className="welcome-test">
            <h2>Welcome to SendIt </h2>
            <p>The best shipping service in Rwanda</p>
          </div>
        </header>
        <div className="footer">
          <p>Copyright &copy; 2018 SendIT</p>
        </div>
      </body>
    );
  }
}

export default Home;
