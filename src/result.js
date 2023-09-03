  option = {
    title: {
      left: 'center',
      text: '测试2错题直方图',
    },
    dataset: [
      {
        dimensions: ['number', 'frequent'],
        source: [
          ['01', 1],
          ['02', 1],
          ['03', 1],
          ['04', 1],
          ['05', 1],
          ['09', 1],
          ['11', 1],
          ['12', 1],
          ['14', 2],
          ['16', 2],
          ['18', 2],
          ['20', 1],
          ['21', 1],
          ['27', 1],
          ['29', 2],
          ['31', 2],
          ['32', 2],
          ['34', 1],
          ['35', 1],
          ['36', 1],
          ['39', 1],
          ['40', 2],
          ['41', 1],
          ['49', 1],
          ['52', 1],
          ['53', 2],
        ],
      },
      {
        transform: {
          type: 'sort',
          config: { dimension: 'frequent', order: 'desc' },
        },
      },
    ],
    xAxis: {
      type: 'category',
      axisLabel: { interval: 0, rotate: 30 },
    },
    yAxis: {},
    series: {
      type: 'bar',
      encode: { x: 'number', y: 'frequent' },
      datasetIndex: 1,
    },
  };

/////////////////////////////////////////////////////

option = {
  title: {
    left: 'center',
    text: '测试1错题直方图',
  },
  dataset: [
    {
      dimensions: ['number', 'frequent'],
      source: [
        ['01', 1],
        ['05', 1],
        ['07', 1],
        ['09', 1],
        ['10', 1],
        ['21', 1],
        ['22', 1],
        ['23', 1],
        ['24', 1],
        ['25', 1],
        ['28', 1],
        ['30', 1],
        ['31', 1],
        ['32', 1],
        ['33', 1],
        ['34', 1],
        ['36', 1],
        ['38', 1],
        ['40', 1],
        ['41', 1],
        ['42', 1],
        ['43', 1],
        ['45', 1],
        ['46', 1],
        ['48', 1],
        ['52', 1],
        ['54', 1],
      ],
    },
    {
      transform: {
        type: 'sort',
        config: { dimension: 'frequent', order: 'desc' },
      },
    },
  ],
  xAxis: {
    type: 'category',
    axisLabel: { interval: 0, rotate: 30 },
  },
  yAxis: {},
  series: {
    type: 'bar',
    encode: { x: 'number', y: 'frequent' },
    datasetIndex: 1,
  },
};

/////////////////////////////////////////////////////

option = {
  title: {
    left: 'center',
    text: '测试3错题直方图',
  },
  dataset: [
    {
      dimensions: ['number', 'frequent'],
      source: [
        ['03', 1],
        ['05', 1],
        ['07', 2],
        ['08', 1],
        ['10', 3],
        ['11', 1],
        ['13', 1],
        ['15', 1],
        ['22', 3],
        ['26', 2],
        ['28', 1],
        ['29', 1],
        ['30', 2],
        ['31', 1],
        ['36', 1],
        ['43', 2],
        ['47', 2],
        ['54', 1],
        ['55', 1],
        ['57', 1],
        ['58', 1],
        ['59', 1],
        ['61', 1],
        ['64', 3],
        ['71', 2],
        ['72', 1],
        ['73', 2],
        ['75', 2],
      ],
    },
    {
      transform: {
        type: 'sort',
        config: { dimension: 'frequent', order: 'desc' },
      },
    },
  ],
  xAxis: {
    type: 'category',
    axisLabel: { interval: 0, rotate: 30 },
  },
  yAxis: {},
  series: {
    type: 'bar',
    encode: { x: 'number', y: 'frequent' },
    datasetIndex: 1,
  },
};
