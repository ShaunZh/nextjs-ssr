import React from 'react';
import fetch from '../libs/fetch';
import Comment from '../components/Comment';

export default class ReactStatic extends React.Component {
  state = {
    list: [],
  };

  componentDidMount() {
    console.log('picture componentDidMount');
    this.fetchData();
  }

  async fetchData() {
    const data = await fetch('http://127.0.0.1:7001/temp');
    console.log('fetch: ', data);
    this.setState({
      // @ts-ignore
      list: data?.list || [],
    });
  }

  render() {
    const { list } = this.state;
    return (
      <div className="page-react">
        <div className="content">
          {list ? <Comment commentsList={list} /> : 'loading'}
        </div>
        page - picture
      </div>
    );
  }
}
