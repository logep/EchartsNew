var data = [0.4, 0.5, 0.6, 0.5, 0.2, 0.1, 0.4, 0.5, 0.8, 0.5, 0.2, 0.1];
var lineData = [];
data.forEach((v, i) => {
    lineData.push(
        [i, v]
    );
});
option = {
    backgroundColor: '#043065',
    tooltip: {},
    color: ['#00f8ff'],
    xAxis: {
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        boundaryGap: 0,
        axisLine: {
            show: true,
            lineStyle: {
                color: 'rgba(135,140,147,0.8)',
            }
        },
        axisLabel: {
            textStyle: {
                color: '#ddd'
            }

        },
    },
    yAxis: {
        //name: 'mg/L',
        axisLine: {
            show: true,
            lineStyle: {
                color: 'rgba(135,140,147,0.8)',
            }
        },
        axisLabel: {
            textStyle: {
                color: '#ddd'
            }

        },
        splitLine: {
            show: false
        }
    },
    series: [{
            name: '2018',
            type: 'line',
            //smooth: true,
            symbol: 'image://data:image/png;base64,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',
            symbolSize: 42,
            showSymbol: false,
            lineStyle: {
                color: {
                    colorStops: [{
                            offset: 1,
                            color: 'rgb(130, 30, 255)'
                        },

                        {
                            offset: 0,
                            color: 'rgb(82, 207, 255)'
                        }
                    ]
                },
                // color: {
                //         colorStops: [{
                //                 offset: 0,
                //                 color: '#821eff'
                //             },

                //             {
                //                 offset: 1,
                //                 color: '#204fff'
                //             }
                //         ],
                //     }
                // width: 3
            },
            areaStyle: { //区域填充样式
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(0, 236, 255, 0.5)'
                    }, {
                        offset: 1,
                        color: 'rgba(0, 136, 212, 0)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },
            data: data
        },
        {
            name: '2018',
            type: 'effectScatter',
            zlevel: 3,
            //showSymbol: false,
            symbolSize: function(val, params) {
                //console.log(val, o);
                /* //按数值大小
                 if(val < 0.6){
                     return 0;
                 } 
                  return Math.max(val * 20, 8);
                  */

                //按拐点
                var idx = params.dataIndex;
                var pre = data[idx - 1];
                var next = data[idx + 1];
                if (pre && next &&
                    (
                        (params.data > pre && params.data > next) ||
                        (params.data < pre && params.data < next)
                    )
                ) {

                    return Math.max(val * 20, 8);
                }
                return 0;


            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'fill',
                color: '#e66',
                scale: 5
            },
            itemStyle: {
                color: '#f55'
            },
            hoverAnimation: true,
            data: data
        },
        {
            type: 'lines',
            polyline: true,
            coordinateSystem: 'cartesian2d',
            zlevel: 2,
            effect: {
                show: true,
                period: 8,
                trailLength: .5,
                //color: 'rgba(255,255,255,.3)',
                color: 'rgb(130, 30, 255, .5)',
                
                symbolSize: [4, 10]
            },
            lineStyle: {
                normal: {
                    //color: '#f00',
                    width: 0,
                    //curveness: 1
                }
            },
            data: [{
                coords: lineData
            }]
        },
        {
            type: 'lines',
            polyline: true,
            coordinateSystem: 'cartesian2d',
            zlevel: 2,
            effect: {
                show: true,
                period: 8,
                trailLength: 1,
                delay: 1000,
                color: 'rgb(82, 207, 255, .5)',
                symbolSize: [4, 10]
            },
            lineStyle: {
                normal: {
                    //color: '#f00',
                    width: 0,
                    //curveness: 1
                }
            },
            data: [{
                coords: lineData
            }]
        },
        {
            type: 'lines',
            polyline: true,
            coordinateSystem: 'cartesian2d',
            zlevel: 2,
            effect: {
                show: true,
                period: 8,
                trailLength: 1,
                delay: 3000,
                 color: 'rgb(130, 30, 255, .5)',
                symbolSize: [4, 10]
            },
            lineStyle: {
                normal: {
                    //color: '#f00',
                    width: 0,
                    //curveness: 1
                }
            },
            data: [{
                coords: lineData
            }]
        },
         {
            type: 'lines',
            polyline: true,
            coordinateSystem: 'cartesian2d',
            zlevel: 2,
            effect: {
                show: true,
                period: 8,
                trailLength: 1,
                delay: 5000,
                color: 'rgb(82, 207, 255, .5)',
                symbolSize: [4, 10]
            },
            lineStyle: {
                normal: {
                    //color: '#f00',
                    width: 0,
                    //curveness: 1
                }
            },
            data: [{
                coords: lineData
            }]
        },
    ]
};

var timeTicket = null;

function autohover(myChart, dataLength, time) {
    var count = 0;

    function startFn() {
        myChart.dispatchAction({
            type: 'downplay',
            seriesIndex: 0, //serieIndex的索引值   可以触发多个
        });
        myChart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: (count) % dataLength
        });
        myChart.dispatchAction({
            type: 'showTip',
            seriesIndex: 0,
            dataIndex: (count) % dataLength
        });
        count++;
    }
    timeTicket && clearInterval(timeTicket);
    timeTicket = setInterval(startFn, time);

    myChart.on('mouseover', function(params) {
        clearInterval(timeTicket);
    });

    myChart.on('mouseout', function(params) {
        timeTicket && clearInterval(timeTicket);
        timeTicket = setInterval(startFn, time);
    });
}

autohover(myChart, data.length, 1000);