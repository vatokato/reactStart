import React from 'react';
import './News.css';
import Article from "./Article";


class News extends React.Component {

  renderNews = () => {
     const {data} = this.props;

    let newsTemplate = <p>К сожалению, новостей нет</p>;
    if(data.length>0) {
      newsTemplate = data.map(function(item, index) {
        return (
          <Article key={item.id} data={item}/>
        )
      });
    }
    return newsTemplate;
  }


  render() {
    const {data} = this.props;

    return (
      <div className="news">
        {this.renderNews()}
        {
          data.length>0?<strong>Всего новостей: {data.length}</strong>:null
        }
      </div>
    )

  }
}

export default News;
