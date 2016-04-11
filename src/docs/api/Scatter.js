export default {
  name: 'Scatter',
  examples: [],
  props: [
    {
      name: 'legendType',
      type: '\'line\', \'scatter\', \'square\', \'rect\'',
      defaultVal: '\'scatter\'',
      isOptional: false,
      desc: 'The type of icon in legend.',
    }, {
      name: 'xAxisId',
      type: 'String | Number',
      defaultVal: '0',
      isOptional: false,
      desc: 'The id of x-axis which is corresponding to the data.',
    }, {
      name: 'yAxisId',
      type: 'String | Number',
      defaultVal: '0',
      isOptional: false,
      desc: 'The id of y-axis which is corresponding to the data.',
    }, {
      name: 'zAxisId',
      type: 'String | Number',
      defaultVal: '0',
      isOptional: false,
      desc: 'The id of z-axis which is corresponding to the data.',
    }, {
      name: 'line',
      type: 'Boolean | Object | ReactElement | Function',
      defaultVal: 'false',
      isOptional: false,
      desc: 'If false set, line will not be drawed. If true set, line will be drawed which have the props calculated internally. If object set, line will be drawed which have the props mergered by the internal calculated props and the option. If ReactElement set, the option can be the custom line element. If set a function, the function will be called to render Customized line.',
      format: [
        `<Scatter data={data} line />`,
        `<Scatter data={data} line={{stroke: 'red', strokeWidth: 2}} />`,
        `<Scatter data={data} line={<CustomizedLine/>} />`,
      ],
      examples: [{
        name: 'A scatter chart with joint line',
        url: '/examples#JointLineScatterChart',
      }],
    }, {
      name: 'lineType',
      type: `'joint' , 'fitting'`,
      defaultVal: '\'joint\'',
      isOptional: false,
      desc: 'If \'joint\' set, line will generated by just jointing all the points. If \'fitting\' set, line will be generated by fitting algorithm.',
    }, {
      name: 'points',
      type: 'Array',
      defaultVal: 'null',
      isOptional: false,
      desc: 'The coordinates of all the scatters.',
      format: [`[{ cx: 12, cy: 12, r: 4, payload: {x: 12, y: 45, z: 9 }}]`],
    }, {
      name: 'isAnimationActive',
      type: 'Boolean',
      defaultVal: 'true',
      isOptional: false,
      desc: 'If set false, animation of scatters will be disabled.',
    }, {
      name: 'animationBegin',
      type: 'Number',
      defaultVal: 0,
      isOptional: false,
      desc: 'Defines when the animation should begin.',
    }, {
      name: 'animationDuration',
      type: 'Number',
      defaultVal: 1500,
      isOptional: false,
      desc: 'Specifies the duration of animation, the unit of this option is ms.',
    }, {
      name: 'animationEasing',
      type: `'ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear'`,
      defaultVal: `'ease'`,
      isOptional: false,
      desc: 'The type of easing function.',
    },
  ],
};
