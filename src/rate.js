option = {
  title: {
    left: 'center',
    text: '测试2正确率推移',
  },
  tooltip: {
    trigger: 'axis',
  },
  xAxis: {
    type: 'category',
    data: ['第一回', '第二回'],
  },
  yAxis: {
    type: 'value',
    scale: true,
    axisLabel: {
      formatter: '{value}%',
    },
  },
  series: [
    {
      data: [57.5, 81.5],
      type: 'line',
      markLine: {
        symbol: ['none', 'none'],
        label: { show: true },
        data: [{ yAxis: 75 }],
      },
      markPoint: {
        data: [
          { type: 'max', name: '最大值' },
          { type: 'min', name: '最小值' },
        ],
      },
    },
  ],
};

//

option = {
  title: {
    left: 'center',
    text: '测试1正确率推移',
  },
  tooltip: {
    trigger: 'axis',
  },
  xAxis: {
    type: 'category',
    data: ['第一回', '第二回'],
  },
  yAxis: {
    type: 'value',
    scale: true,
    axisLabel: {
      formatter: '{value}%',
    },
  },
  series: [
    {
      data: [50, 75.9],
      type: 'line',
      markLine: {
        symbol: ['none', 'none'],
        label: { show: true },
        data: [{ yAxis: 75 }],
      },
      markPoint: {
        data: [
          { type: 'max', name: '最大值' },
          { type: 'min', name: '最小值' },
        ],
      },
    },
  ],
};
