/*
 * @Description: SSR 渲染，注意：ssr页面是无法通过next export 导出的，否则会出错
 * @Author: Hexon
 * @Date: 2020-05-28 16:47:05
 * @LastEditors: Hexon
 * @LastEditTime: 2020-06-02 18:56:13
 */

import React, { useState, useEffect } from 'react';
import a from 'next/link';
import { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import Head from '../components/head';
import Tabs from '../components/Tabs';
import Comment, { CommentItem } from '../components/Comment';
import Brief from '../components/Brief';
import Picture, { PictureItem } from '../components/Picture';
import RelativeVideo from '../components/RelativeVideo';

interface IVideo {
  src: string;
  name: string;
}
// SSR 写法
export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('http://127.0.0.1:7001/temp');
  const data = await res.json();
  console.log('list data: ', data);

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      data,
    },
  };
};

const Home = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [activeTab, setActiveTab] = useState<number>(1);
  const [commentsList, setCommentsList] = useState<Array<CommentItem>>([]);
  const [picturesList, setPicturesList] = useState<Array<PictureItem>>([]);
  const [brief, setBrief] = useState<string>('');
  const [videosList, setVideosList] = useState<Array<IVideo>>([]);

  const tabsList = [
    {
      label: '评论',
    },
    {
      label: '图文',
    },
    {
      label: '简介',
    },
    {
      label: '相关视频',
    },
  ];

  const onChangeTab = (index: number) => {
    setActiveTab(index);
  };

  const Content: Array<React.ReactNode> = [
    <Comment commentsList={commentsList} />,
    <Picture />,
    <Brief />,
    <RelativeVideo />,
  ];

  useEffect(() => {
    setCommentsList(data?.list || []);
  }, []);

  return (
    <div className="page-home">
      <Head title="home" />
      <div className="disp" />
      <div className="tabs">
        <Tabs tabsItem={tabsList} onChange={onChangeTab} />
        <div className="tabs-content">{Content[activeTab]}</div>
      </div>

      <style jsx>{`
        .disp {
          width: 100%;
          height: 250px;
        }
      `}</style>
    </div>
  );
};

export default Home;
