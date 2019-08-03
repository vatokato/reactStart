import React from 'react';
import PropTypes from 'prop-types';


class Article extends React.Component {
  state = {
    visible: false, // определили начальное состояние
  }

  handleReadMoreClick = (e) => {
    (e).preventDefault();
    this.setState({visible:true});
  }

  render() {
    const { id, author, text, bigText } = this.props.data;
    const { visible } = this.state;

    return (
      <div className="news__article">
        <p className="news__author">{author}:</p>
        <p className="news__text">{text}</p>
        {
          !visible && <a href={"#new-"+id} onClick={this.handleReadMoreClick} className='news__readmore'>Подробнее</a>
        }

        {
          visible && <p className="news__bigText">{bigText}</p>

        }
      </div>
    );
  }
}

Article.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    bigText: PropTypes.string.isRequired
  })
}

export default Article;
