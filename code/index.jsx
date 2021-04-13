'use strict';

import React, { Component } from 'react';
import { fetch } from 'whatwg-fetch';
import jsonp from 'fetch-jsonp';
import style from './index.scss';
const print = function(value) {
  console.log(value);
};
class Page_0 extends Component {
  state = {
    data: [
      {
        title: '小户型卫浴怎样才能装得高大上？',
        coverImage: 'https://img.alicdn.com/tfs/TB1Txq6o7T2gK0jSZFkXXcIQFXa-684-684.png',
        readCount: 200,
        user: { userImage: 'https://img.alicdn.com/tfs/TB1DWe6oYj1gK0jSZFOXXc7GpXa-60-60.png', userName: '时尚家居' },
        url: 'https://www.imgcook.com'
      },
      {
        title: '拥有超多功能的40平米简约小公寓了解一下',
        coverImage: 'https://img.alicdn.com/tfs/TB1XRQTo7P2gK0jSZPxXXacQpXa-684-648.png',
        readCount: 500,
        user: {
          userImage: 'https://img.alicdn.com/tfs/TB1DWe6oYj1gK0jSZFOXXc7GpXa-60-60.png',
          userName: '花花设计工作'
        },
        url: 'https://www.imgcook.com/docs'
      }
    ]
  };
  constructor(props, context) {
    super();
    console.log('super props');
    this.fetch_example();
    this.jsonp_example();
  }
  componentDidUpdate(prevProps, prevState, snapshot) {}
  isReadCountShow(readCount) {
    return readCount > 300;
  }
  fetch_example() {
    fetch('https://jsonplaceholder.typicode.com/todos/1', { method: 'GET', headers: '{"Content-Type":"json"}' })
      .then(response => response.json())
      .then((data, error) => {
        console.log('fetch example: ', data, error);
        return data;
      })
      .catch(e => {
        console.log('error', e);
      });
  }
  jsonp_example() {
    jsonp('https://assets.airbnb.com/frontend/search_results.js', { jsonpCallbackFunction: 'search_results', body: {} })
      .then(response => response.json())
      .then((data, error) => {
        console.log('jsonp example: ', data, error);
        return data;
      })
      .catch(e => {
        console.log('error', e);
      });
  }
  render() {
    return (
      <div className={style.box}>
        {this.state.data.map((item, index) => {
          return (
            <div
              key={index}
              onClick={e => {
                window.open(item.url, '_blank');
              }}
              data-url={item.url}
              key={item.index}
            >
              <div className={style.bd}>
                <img
                  className={style.layer}
                  src={'https://img.alicdn.com/tfs/TB1bLoWoYH1gK0jSZFwXXc7aXXa-684-684.png'}
                />
                <img className={style.bg} src={item.coverImage} />
                <div className={style.wrap}>
                  <img
                    className={style.riverdinwei}
                    src={'https://img.alicdn.com/tfs/TB1mtZRoVT7gK0jSZFpXXaTkpXa-28-36.png'}
                  />
                  <span className={style.distance}>距离500m</span>
                </div>
              </div>
              <div className={style.main}>
                <span className={style.title}>{item.title}</span>
              </div>
              <div className={style.ft}>
                <div className={style.block}>
                  <img
                    className={style.xianjin}
                    src={'https://img.alicdn.com/tfs/TB1OvsYoW61gK0jSZFlXXXDKFXa-60-60.png'}
                  />
                  <span className={style.fashionHome}>{item.user.userName}</span>
                </div>
                {this.isReadCountShow(item.readCount) && (
                  <div className={style.group}>
                    <img
                      className={style.favorite}
                      src={'https://img.alicdn.com/tfs/TB1arwYo7T2gK0jSZFkXXcIQFXa-46-44.png'}
                    />
                    <span className={style.num}>{item.readCount}</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
export default Page_0;
