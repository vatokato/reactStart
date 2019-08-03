import React from 'react';
import PropTypes from 'prop-types';

class Add extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name:'',
      text:'',
      bigText:'',
      agree: false
    }
  }

  handlerSubmit = (e)=> {
    e.preventDefault();
    const {name, text, bigText} = this.state;
    this.props.onAddNews({
      id: +new Date(),
      author: name,
      text,
      bigText
    });
  }

  validate=() => {
    const { name, text, bigText, agree } = this.state;
    if (name.trim() && text.trim() && bigText.trim() && agree) {
      return true;
    }
    return false;
  }

  handleChange = (e) => {
    const {id, value} = e.target;
    this.setState({
      [id]: value
    });
  }

  handlerCheckbox = (e) => {
    this.setState({
      agree: e.currentTarget.checked
    });
  }

  componentDidMount() {}

  render() {
    const {name, text, bigText, agree} = this.state;

    return (
      <form className="add" onSubmit={this.handlerSubmit}>
        <input
          id='name'
          type='text'
          value={name}
          className='add__author'
          placeholder='Ваше имя'
          onChange={this.handleChange}
        />
        <textarea
          id='text'
          className='add__text'
          value={text}
          placeholder='Кратко'
          onChange={this.handleChange}
        />
        <textarea
          id='bigText'
          className='add__bigText'
          value={bigText}
          placeholder='Полный текст новости'
          onChange={this.handleChange}
        />
        <label className='add__checkrule'>
          <input
            type='checkbox'
            onChange={this.handlerCheckbox}
            checked={agree}
          /> Я согласен с правилами
        </label>
        <button
          disabled={!this.validate()}
          className='add__btn'>
          Добавить новость
        </button>
      </form>

    )
  }
}

Add.propTypes = {
  onAddNews: PropTypes.func.isRequired, // func используется для проверки передачи function
}

export default Add;
