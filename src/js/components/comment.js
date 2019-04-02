import React, { Component } from "react";

class Comment extends Component {
  constructor() {
    super();
    this.state = {
      characterCount: 0
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      characterCount: event.target.value.length
    });
  }

  render() {
    return (
      <div>
        <textarea
          className="form-control"
          placeholder="Write a comment..."
          onChange={this.handleChange}
        />
        <small>
          {this.props.maxLetters - this.state.characterCount} Remaining
        </small>
      </div>
    );
  }
}

export default Comment;
