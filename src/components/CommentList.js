import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class CommentList extends React.Component {
  renderComments() {
    const comments = this.props.comments;
    return (
      comments.map((comment, index) => {
        return <li key={index}>{comment}</li>
      })
    )
  }

  render() {
    return (
      <div>
        <ul>
          {this.renderComments()}
        </ul>
      </div>
    );
  }
}

CommentList.propTypes = {
  comments: PropTypes.array
};

const mapStateToProps = (state) => {
  const comments = state.comments;
  return { comments };
};

export default connect(mapStateToProps)(CommentList);
