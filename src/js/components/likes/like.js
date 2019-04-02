import React, { Component } from "react";
import LikeIcon from "./like-icon";

class Like extends Component {
  constructor() {
    super();

    this.state = {
      liked: false
    };

    this.toggleLike = this.toggleLike.bind(this);
  }
  toggleLike() {
    this.setState(previousState => ({
      liked: !previousState.liked
    }));
  }

  render() {
    return (
      <div>
        {this.state.liked && <LikeIcon />}
        <hr />
        <div>
          <button type="button">
            <i
              className="fa fa-thumbs-o-up fa-4 align-middle"
              aria-hidden="true"
              onClick={this.toggleLike}
            />
            &nbsp;
            <span className="align-middle">Like</span>
          </button>
        </div>
      </div>
    );
  }
}

export default Like;
