/*
 * @Description: 评论
 * @Author: Hexon
 * @Date: 2020-05-28 10:45:10
 * @LastEditors: Hexon
 * @LastEditTime: 2020-05-28 16:41:30
 */

import React from 'react';

export interface CommentItem {
  headImg: string;
  nickname: string;
  content: string;
}

export interface CommentProps {
  commentsList: Array<CommentItem>;
}

const Comment: React.FC<CommentProps> = (props) => {
  const { commentsList = [] } = props;
  const CommentList: React.ReactNode = (
    <div className="list">
      {commentsList.map((item: CommentItem) => (
        <div className="comment-item">
          <img src={item.headImg} alt="head-img" className="head-img" />
          <div className="right">
            <p className="nickname">{item.nickname}</p>
            <p className="content">{item.content}</p>
          </div>
          <style jsx>
            {`
              .comment-item {
                display: flex;
                align-items: center;
              }
              .head-img {
                width: 32px;
                height: 32px;
                border-radius: 50%;
              }
              .right {
                flex: 1;
              }
            `}
          </style>
        </div>
      ))}
    </div>
  );

  return <div className="comment">{CommentList}</div>;
};

export default Comment;
