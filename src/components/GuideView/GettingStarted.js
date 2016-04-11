import React, { Component } from 'react';
import Highlight from 'utils/Highlight';
import CustomAxisTick from './CustomAxisTick';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const data = [
  { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 300, pv: 4567, amt: 2400 },
  { name: 'Page C', uv: 300, pv: 1398, amt: 2400 },
  { name: 'Page D', uv: 200, pv: 9800, amt: 2400 },
  { name: 'Page E', uv: 278, pv: 3908, amt: 2400 },
  { name: 'Page F', uv: 189, pv: 4800, amt: 2400 },
];


const GettingStarted = () => (
  <div className="mod-getting-started" id="Getting_Started">
    <h3>开始</h3>
    <h4>1. 选择图表种类</h4>
    <p>通过数据生成简单的图表。</p>

    <div className="step-1">
      <Highlight className="e4x">
      {
`<LineChart width={400} height={400} data={data}>
  <Line type="monotone" dataKey="uv" stroke="#8884d8" />
</LineChart>`
      }
      </Highlight>

      <LineChart width={600} height={300} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      </LineChart>
    </div>

    <h4>2. 增加需要绘制的组件</h4>
    <p>LineChart 可以配置 XAxis, YAxis, Legend, CartesianGrid 等组件.</p>
    <div className="step-2">
      <Highlight className="e4x">
      {
`<LineChart width={600} height={300} data={data}>
  <Line type="monotone" dataKey="uv" stroke="#8884d8" />
  <CartesianGrid stroke="#ccc" />
  <XAxis dataKey="name" />
  <YAxis />
</LineChart>`
      }
      </Highlight>

      <LineChart width={600} height={300} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
      </LineChart>
    </div>

    <h4>3. 调整一些组件的 props</h4>
    <p>例如，为了有足够的位置来展示 X 轴，margin-right 的值要设置的足够大，Y 轴的宽度不要设置的太大，否则当右侧留白较少的时候，会显得不协调，或者你想要把网格的线型设置成虚线。</p>
    <div className="step-3">
      <Highlight className="e4x">
      {
`<LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
  <Line type="monotone" dataKey="uv" stroke="#8884d8" />
  <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
  <XAxis dataKey="name" />
  <YAxis />
</LineChart>`
      }
      </Highlight>

      <LineChart width={600} height={300} data={data} margin={{ top: 20, right: 20, bottom: 5, left: 0 }}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis width={40} />
      </LineChart>
    </div>

    <h4>4. 增加交互</h4>
    <p>默认情况下，我们可以增加 Tooltip。</p>
    <div className="step-4">
      <Highlight className="e4x">
      {
`<LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
  <Line type="monotone" dataKey="uv" stroke="#8884d8" />
  <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
</LineChart>`
      }
      </Highlight>

      <LineChart width={600} height={300} data={data} margin={{ top: 20, right: 20, bottom: 5, left: 0 }}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis width={40} />
        <Tooltip />
      </LineChart>
    </div>

    <h4>5. 定制你的模块</h4>
    <p>这里 X 轴被定制成需要的形式。</p>
    <div className="step-5">
      <Highlight className="e4x">
      {
`<LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
  <Line type="monotone" dataKey="uv" stroke="#8884d8" />
  <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
  <XAxis dataKey="name" tick={<CustomAxisTick />} />
  <YAxis />
  <Tooltip />
</LineChart>`
      }
      </Highlight>

      <LineChart width={600} height={300} data={data} margin={{ top: 20, right: 20, bottom: 5, left: 0 }}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" tick={<CustomAxisTick />} />
        <YAxis width={40} />
        <Tooltip />
      </LineChart>
    </div>
  </div>
);

export default GettingStarted;
