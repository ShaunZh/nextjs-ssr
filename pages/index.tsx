/*
 * @Description: 该方式使用react写页面，并通过next打包输出html文件，可在componentDidMount中获取数据(在客户端获取数据)
 * @Author: Hexon
 * @Date: 2020-06-02 16:56:14
 * @LastEditors: Hexon
 * @LastEditTime: 2020-06-02 19:08:41
 */

import React from 'react';
import fetch from '../libs/fetch';
import Comment from '../components/Comment';

export default class ReactStatic extends React.Component {
  state = {
    list: [],
  };

  componentDidMount() {
    console.log('index componentDidMount');
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
        page - live
      </div>
    );
  }
}
