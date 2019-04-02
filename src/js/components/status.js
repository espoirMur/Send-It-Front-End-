import React, { Component } from "react";
import Like from "../components/likes/like";
import Comment from "./comment";

class Status extends Component {
  render() {
    return (
      <div className="col-6 offset-3">
        <div className="card">
          <div className="card-block">
            <div className="row">
              <div className="col-10 profile-row">
                <div className="row">
                  <a href="#">The Zen of Programming</a>
                </div>
                <div class="row">
                  <small className="post-time">10 mins</small>
                </div>
              </div>
            </div>
            <Like />
          </div>
          <p>Hello world!</p>
          <div className="card-footer text-muted">
            <Comment maxLetters={280} />
          </div>
        </div>
      </div>
    );
  }
}

export default Status;
