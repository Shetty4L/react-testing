import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from 'actions';

class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = { comment: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ comment: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.saveComment(this.state.comment);

    this.setState({ comment: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <h4>Add a Comment</h4>
        <textarea onChange={this.handleChange} value={this.state.comment}/>
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
    );
  }
}

CommentBox.propTypes = {
  saveComment: PropTypes.func
}

export default connect(null, actions)(CommentBox);
