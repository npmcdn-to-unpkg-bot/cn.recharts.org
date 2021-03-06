export default {
  name: 'Line',
  examples: [],
  props: [
    {
      name: 'type',
      type: '\'linear\', \'monotone\', \'step\', \'stepBefore\', \'stepAfter\'',
      defaultVal: '\'linear\'',
      isOptional: false,
      desc: 'The interpolation type of line.',
    }, {
      name: 'dataKey',
      type: 'String | Number',
      defaultVal: 'null',
      isOptional: false,
      desc: 'The key of a group of data which should be unique in an area chart.',
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
      name: 'legendType',
      type: '\'line\', \'scatter\', \'square\', \'rect\'',
      defaultVal: '\'line\'',
      isOptional: false,
      desc: 'The type of icon in legend.',
    }, {
      name: 'dot',
      type: 'Boolean | Object | ReactElement | Function',
      defaultVal: 'false',
      isOptional: false,
      desc: 'If false set, dots will not be drawed. If true set, dots will be drawed which have the props calculated internally. If object set, dots will be drawed which have the props mergered by the internal calculated props and the option. If ReactElement set, the option can be the custom dot element.If set a function, the function will be called to render customized dot.',
      format: [
        `<Line dataKey="value" dot={false} />`,
        `<Line dataKey="value" dot={{ stroke: 'red', strokeWidth: 2 }} />`,
        `<Line dataKey="value" dot={<CustomizedDot />} />`,
        `<Line dataKey="value" dot={renderDot} />`,
      ],
      examples: [{
        name: 'A line chart with customized dot',
        url: '/examples#CustomizedDotLineChart',
      }],
    }, {
      name: 'label',
      type: 'Boolean | Object | ReactElement | Function',
      defaultVal: 'false',
      isOptional: false,
      desc: 'If false set, labels will not be drawed. If true set, labels will be drawed which have the props calculated internally. If object set, labels will be drawed which have the props mergered by the internal calculated props and the option. If ReactElement set, the option can be the custom label element. If set a function, the function will be called to render customized label.',
      format: [
        `<Line dataKey="value" label />`,
        `<Line dataKey="value" label={{ fill: 'red', fontSize: 20 }} />`,
        `<Line dataKey="value" label={<CustomizedLabel />} />`,
        `<Line dataKey="value" label={renderLabel} />`,
      ],
      examples: [{
        name: 'A line chart with customized label',
        url: '/examples#CustomizedLabelLineChart',
      }],
    }, {
      name: 'points',
      type: 'Array',
      defaultVal: 'null',
      isOptional: false,
      desc: 'The coordinates of all the points in the line, usually calculated internally.',
      format: [`[{x: 12, y: 12, value: 240}]`],
    }, {
      name: 'layout',
      type: `'horizontal', 'vertical'`,
      defaultVal: 'undefined',
      isOptional: true,
      desc: 'The layout of line, usually inherited from parent.',
    }, {
      name: 'formatter',
      type: 'Function',
      defaultVal: 'null',
      isOptional: true,
      desc: 'The formatter function of data.',
    }, {
      name: 'unit',
      type: 'String | Number',
      defaultVal: 'null',
      isOptional: true,
      desc: 'The unit of data.',
    }, {
      name: 'name',
      type: 'String | Number',
      defaultVal: 'null',
      isOptional: true,
      desc: 'The name of data.',
    }, {
      name: 'isAnimationActive',
      type: 'Boolean',
      defaultVal: 'true',
      isOptional: false,
      desc: 'If set false, animation of line will be disabled.',
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
