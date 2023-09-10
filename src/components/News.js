
import React, { Component } from 'react';
import NewsItem from './NewsItem';
import NavBar from './NavBar';

export class News extends Component {
  constructor() {
    super();
    console.log('Hello I am constructor');
    this.state = {
      articles: [],
      loading: false,
      country: 'us', // Default country
    };
  }

  async componentDidMount() {
    this.fetchNews(this.state.country); // Fetch news for the default country
  }

  fetchNews = async (country) => {
    this.setState({ loading: true });

    const url = `https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=${country}&max=30&apikey=05c174378af5b319d8b847c443037dd2`;

    const data = await fetch(url);
    const parsedData = await data.json();

    this.setState({ articles: parsedData.articles, loading: false });
  };

  handleCountryChange = (country) => {
    this.setState({ country }, () => {
      this.fetchNews(country);
    });
  };

  render() {
    return (
      <div>
        <NavBar onCountryChange={this.handleCountryChange} />
        <div className='container my-4'>
          <h2 className='text-center' style={{ margin: '35px 0px', marginTop: '90px' }}>
            <u>Top News Headlines</u>
          </h2>
          <div className='row'>
            {this.state.articles.map((element) => (
              <div className='col-md-3' key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 30) : 'No description is available'}
                  description={element.description ? element.description.slice(0, 60) : 'No description is available'}
                  imageUrl={
                    element.image ? element.image : 'https://resize.indiatvnews.com/en/resize/newbucket/715_-/2021/04/breaking-1618708354.jpg'
                  }
                  newsUrl={element.url}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default News;
