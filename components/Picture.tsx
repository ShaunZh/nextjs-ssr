/*
 * @Description: 图文
 * @Author: Hexon
 * @Date: 2020-05-28 10:46:42
 * @LastEditors: Hexon
 * @LastEditTime: 2020-05-28 15:38:50
 */
import React from 'react';

export interface PictureItem {
  headImg: string;
  nickname: string;
  content: string;
  time: string;
  picturesList: Array<string>;
}

export interface PictureProps {
  picturesList?: Array<PictureItem>;
}
const Picturn: React.FC<PictureProps> = () => {
  return <div className="picture">图文</div>;
};

export default Picturn;
