import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import Highlight from 'utils/Highlight';
import pureRender from 'pure-render-decorator';
import './IndexView.scss';

const data = [
  { name: 'A', uv: 400, pv: 240, amt: 2400 },
  { name: 'B', uv: 300, pv: 456, amt: 2400 },
  { name: 'C', uv: 300, pv: 139, amt: 2400 },
  { name: 'D', uv: 200, pv: 980, amt: 2400 },
  { name: 'E', uv: 278, pv: 390, amt: 2400 },
  { name: 'F', uv: 189, pv: 480, amt: 2400 },
];

@pureRender
class IndexView extends Component {
  render() {
    const exCode = `
  <LineChart width={500} height={300} data={data}>
    <XAxis dataKey="name"/>
    <YAxis/>
    <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
  </LineChart>
    `;

    return (
      <div className="page page-index">
        <div className="desc">
          <p className="title">Recharts</p>
          <p className="subtitle">用 React 重新定义图表</p>
          <p><a href="/guide#installation" className="button install-btn">安装 v0.9.1</a></p>
        </div>
        <div className="examples">
          <div className="ex-code">
            <LineChart width={500} height={300} data={data} margin={{ top: 5, right: 5, bottom: 5, left: 0 }}>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
              <Line type="monotone" dataKey="uv" stroke="#8884d8" />
              <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
            </LineChart>
            <Highlight className="e4x">{exCode}</Highlight>
          </div>
        </div>
        <div className="features">
          <ul className="feat">
            <li>
              <strong>组件化</strong>
              <p className="text">通过解耦、可复用的 React 组件构成你的应用，借用 React 虚拟 DOM 特性，你将会更加放心。</p>
            </li>
            <li>
              <strong>得心应手</strong>
              <p className="text">由 props 作简单地配置，原生 SVG 元素的支持和轻量级依赖 D3 子模块。</p>
            </li>
            <li>
              <strong>可定制</strong>
              <p className="text">分离每一种不同图表种类，所以你可以根据你的想法重新定义每一个子模块去变幻新图表。</p>
            </li>
          </ul>
        </div>
        <div className="like">
          <p className="text">Recharts 可以和你的 React 应用深度结合</p>
          <p className="btn"><a href="/guide#getting-started" className="button getting-started-btn">开始</a></p>
        </div>
      </div>
    );
  }
}

export default IndexView;
