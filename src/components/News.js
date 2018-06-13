import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchNews } from '../store/actions/news.js'

const mapStateToPropsNews = (state = {}) => {
  return {
    ...state,
    newsList: state.news.newsList
  }
}

const mapDispatchToPropsNews = dispatch => {
  return {
    fetchNews: (data) => {
      dispatch(fetchNews(data))
    }
  }
}

class News extends Component {
  constructor(props) {
    super(props);
    this.noDataDom =
      <div>
        <h2>News</h2>
        <p>No news</p>
      </div>
  }
  componentWillMount() {
    this.props.fetchNews([{
      id: '12345',
      title: 'First News'
    }])
  }
  componentDidMount() {
    setTimeout(() => {
      this.props.fetchNews([{
        id: '67890',
        title: 'Second News'
      },{
        id: '12345',
        title: 'First News'
      }])
    }, 2000)
  }
  render() {
    if (this.props.newsList.length) {
      return this.renderNewsList()
    } else {
      return (this.noDataDom)
    }
  }
  renderNewsList() {
    const newsList = this.props.newsList;
    return (
      <div>
        <h2>News</h2>
        <div>
          { newsList.map((news) => (
            <p key={news.id}>{news.title}</p>
          )) }
        </div>
      </div>
    )
  }
}
export default connect(mapStateToPropsNews, mapDispatchToPropsNews)(News);