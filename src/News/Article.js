import React from 'react';
import PropTypes from 'prop-types';


class Article extends React.Component {
  render() {
    const { author, text } = this.props.data;
    return (
      <div className="news__article">
        <p className="news__author">{author}:</p>
        <p className="news__text">{text}</p>
      </div>
    );
  }
}

Article.propTypes = {
  data: PropTypes.shape({
    author: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  })
}

export default Article;
