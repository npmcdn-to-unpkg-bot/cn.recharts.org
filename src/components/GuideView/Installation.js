import React, { Component } from 'react';
import Highlight from 'utils/Highlight';

const Installation = () => (
  <div className="mod-installation" id="Installation">
    <h3>安装</h3>
    <h4>NPM</h4>
    <p>当你需要构建单页应用时，NPM 是推荐的安装方式。它可能非常友好地配合 CommonJS 模块打包工具，例如 <a href="http://webpack.github.io/" target="_blank" rel="external">Webpack</a></p>
    <Highlight className="sh">
    {
      `  # latest stable
  $ npm install recharts`
    }
    </Highlight>
    <h4>UMD</h4>
    <p>同样支持 UMD 的构建，可以通过 <a href="https://unpkg.com/" target="_blank">unpkg</a> 引入：</p>
    <Highlight className="html">
    {
`  <script src="https://unpkg.com/recharts/umd/Recharts.min.js"></script>`
    }
    </Highlight>
    <p>你可以通过 <code>window.Recharts</code> 来调用</p>
    <h4>开发时构建</h4>
    <Highlight className="sh">
    {`  $ git clone https://github.com/recharts/recharts.git
  $ cd recharts
  $ npm install
  $ npm run build`}
    </Highlight>
  </div>
);

export default Installation;
