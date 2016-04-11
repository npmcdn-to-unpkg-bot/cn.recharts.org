import React, { Component } from 'react';
import Highlight from 'utils/Highlight';
import { BarChart, Bar, LineChart, Legend, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import CustomBarLabel from './CustomBarLabel';
import CustomAxisTick from './CustomAxisTick';
import TriangleBar from './TriangleBar';
import CustomTooltip from './CustomTooltip';

const data = [
  { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 300, pv: 4567, amt: 2400 },
  { name: 'Page C', uv: 300, pv: 1398, amt: 2400 },
  { name: 'Page D', uv: 200, pv: 9800, amt: 2400 },
  { name: 'Page E', uv: 278, pv: 3908, amt: 2400 },
  { name: 'Page F', uv: 189, pv: 4800, amt: 2400 },
];

function Customize() {
  return (
    <div className="mod-customize" id="Customize">
      <h3>定制</h3>

      <h4>1. line, area, bar, axis 的标签可以被定制</h4>
      <p>例如，我们可以通过定制标签和轴刻度来创建 bar。</p>
      <div className="demo">
        <Highlight className="e4x">
        {
`<BarChart width={600} height={300} data={data}>
  <XAxis dataKey="name" tick={<CustomAxisTick />} />
  <YAxis />
  <Bar type="monotone" dataKey="uv" barSize={30} fill="#8884d8"
    label={<CustomBarLabel />}/>
</BarChart>`
        }
        </Highlight>

        <BarChart width={600} height={300} data={data}>
          <XAxis dataKey="name" tick={<CustomAxisTick />} />
          <YAxis />
          <Bar type="monotone" dataKey="uv" barSize={30} fill="#8884d8" label={<CustomBarLabel />} />
        </BarChart>
      </div>

      <h4>2. bar 的形状可以被定制</h4>
      <p>通过数据生成简单的图表。</p>
      <div className="demo">
        <Highlight className="e4x">
        {
`<BarChart width={600} height={300} data={data}>
  <XAxis dataKey="name" tick={<CustomAxisTick />} />
  <YAxis />
  <Bar type="monotone" dataKey="uv" fill="#8884d8"
    shape={<TriangleBar />} />
</BarChart>`
        }
        </Highlight>

        <BarChart width={600} height={300} data={data}>
          <XAxis dataKey="name" tick={<CustomAxisTick />} />
          <YAxis />
          <Bar type="monotone" dataKey="uv" fill="#8884d8" shape={<TriangleBar />} />
        </BarChart>
      </div>

      <h4>3. Tooltip（图例）的内容可以被定制</h4>
      <p>有时我们可能想让 Tooltip 展示更多的内容。</p>
      <div className="demo">
        <Highlight className="e4x">
        {
`<BarChart width={600} height={300} data={data}>
  <XAxis dataKey="name" tick={<CustomAxisTick />} />
  <YAxis />
  <Tooltip content={<CustomTooltip />}/>
  <Bar type="monotone" dataKey="uv" fill="#8884d8"
    shape={<TriangleBar />} />
</BarChart>`
        }
        </Highlight>

        <BarChart width={600} height={300} data={data}>
          <XAxis dataKey="name" tick={<CustomAxisTick />} />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Bar type="monotone" dataKey="uv" fill="#8884d8" shape={<TriangleBar />} />
        </BarChart>
      </div>

      <h4>4. 每一个图表元素的风格可以被定制</h4>
      <p>除了 tooltip 和 legend，在图表中所有的元素都是由 SVG 元素绘制。所有你可以便利地改变每一个图表元素的属性。</p>
      <div className="demo">
        <Highlight className="e4x">
        {
`<BarChart width={600} height={300} data={data}>
  <XAxis dataKey="name" stroke="#8884d8" />
  <YAxis />
  <Tooltip />
  <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
  <Bar type="monotone" dataKey="uv" fill="#8884d8" barSize={30} />
</BarChart>`
        }
        </Highlight>

        <BarChart width={600} height={300} data={data}>
          <XAxis dataKey="name" stroke="red" />
          <YAxis stroke="red" />
          <Tooltip />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Bar type="monotone" dataKey="uv" fill="green" barSize={30} />
        </BarChart>
      </div>

      <h4>5. Tooltip 和 lengend 的风格是可以被定制</h4>
      <p>即使 tooltip 和 lengend 都是由 SVG 元素绘制的，你可以改变它们的 style 通过我们提供的 api。当然，我们可以改变 CSS。</p>
      <div className="demo">
        <Highlight className="e4x">
        {
`<BarChart width={600} height={300} data={data}>
  <XAxis dataKey="name" stroke="#8884d8" />
  <YAxis />
  <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
  <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
  <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
  <Bar type="monotone" dataKey="uv" fill="#8884d8" barSize={30} />
</BarChart>`
        }
        </Highlight>

        <BarChart width={600} height={300} data={data}>
          <XAxis dataKey="name" stroke="#8884d8" />
          <YAxis />
          <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
          <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Bar type="monotone" dataKey="uv" fill="#8884d8" barSize={30} />
        </BarChart>
      </div>
    </div>
  );
}

export default Customize;
