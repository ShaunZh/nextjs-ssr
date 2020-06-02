/*
 * @Description:
 * @Author: Hexon
 * @Date: 2020-06-02 15:02:24
 * @LastEditors: Hexon
 * @LastEditTime: 2020-06-02 15:16:56
 */

import fetch from 'isomorphic-unfetch';

export default async function (url: string, ...args: any) {
  const res = await fetch(url, ...args);
  return res.json();
}
