import React from 'react';
import {News} from "./components/News";
import Add from "./components/Add";

//import myNews from "../public/data/newsData";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: null,
      isLoading: true
    }
  }

  componentDidMount = () => {
    fetch('./data/newsData.json')
      .then((response)=>response.json())
      .then((data)=>{
        this.setState({
          news: data,
          filteredNews:null,
          isLoading:false
        });
      })
      .catch(function(error) {
        console.log(error.message);
      });
  }

  static getDerivedStateFromProps(props, state) {
    if(!Array.isArray(state.news)) return null;
    let nextFilteredNews = [...state.news];
    nextFilteredNews.forEach((item, index) => {
      if (item.bigText.toLowerCase().indexOf('pubg') !== -1) {
        item.bigText = 'СПАМ';
      }
    });
    return {
      filteredNews: nextFilteredNews,
    }
  }

  handleAddNews = (data) => {
    const newNews = [data, ...this.state.news];
    this.setState({news: newNews});
  }

  render() {
    const {news, filteredNews, isLoading} = this.state;
    return (
      <React.Fragment>
        <Add onAddNews={this.handleAddNews}/>
        {isLoading && <p>Загружаю...</p>}
        {Array.isArray(news) && <News data={filteredNews} />}
      </React.Fragment>
    )
  }

}

export default App;
