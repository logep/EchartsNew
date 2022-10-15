    const JamesData = [{
            name: '2003-2004',
            value: [20.94, 5.89, 1.65, 0.73, 5.47],
            zlevel: 1,
            animationEasing: "quinticOut"
        },
        {
            name: '2004-2005',
            value: [27.19, 7.21, 2.21, 0.65, 7.35],
            zlevel: 2,
            animationEasing: "backInOut"
        },
        {
            name: '2005-2006',
            value: [31.28, 6.49, 1.53, 0.82, 7.18],
            zlevel: 3,
            animationEasing: "backInOut"
        },
        {
            name: '2006-2007',
            value: [26.87, 6.42, 1.62, 0.66, 7.01],
            zlevel: 4,
            animationEasing: "backInOut"
        },
        {
            name: '2007-2008',
            value: [29.73, 7.25, 1.83, 1.11, 7.89],
            zlevel: 5,
            animationEasing: "backInOut"
        },
        {
            name: '2008-2009',
            value: [29.45, 7.25, 1.68, 1.11, 7.80],
            zlevel: 6,
            animationEasing: "backInOut"
        },
        {
            name: '2009-2010',
            value: [29.63, 8.45, 1.66, 1.11, 7.54],
            zlevel: 7,
            animationEasing: "backInOut"
        },
        {
            name: '2010-2011',
            value: [26.08, 6.77, 1.59, 0.76, 7.66],
            zlevel: 8,
            animationEasing: "backInOut"
        },
        {
            name: '2011-2012',
            value: [28.00, 6.07, 1.86, 0.78, 8.42],
            zlevel: 9,
            animationEasing: "backInOut"
        },
        {
            name: '2012-2013',
            value: [26.59, 7.10, 1.72, 0.86, 8.11],
            zlevel: 10,
            animationEasing: "backInOut"
        },
        {
            name: '2013-2014',
            value: [27.19, 6.01, 1.62, 0.38, 6.95],
            zlevel: 11,
            animationEasing: "backInOut"
        },
        {
            name: '2014-2015',
            value: [26.34, 7.64, 1.60, 0.79, 7.21],
            zlevel: 12,
            animationEasing: "backInOut"
        },
        {
            name: '2015-2016',
            value: [25.48, 6.95, 1.58, 0.78, 7.89],
            zlevel: 13,
            animationEasing: "backInOut"
        },
        {
            name: '2016-2017',
            value: [27.66, 8.55, 1.38, 0.73, 8.73],
            zlevel: 14,
            animationEasing: "backInOut"
        },
        {
            name: '2017-2018',
            value: [28.84, 9.09, 1.40, 0.90, 8.74],
            zlevel: 15,
            animationEasing: "backInOut"
        },
        {
            name: '2018-2019',
            value: [27.36, 8.25, 1.31, 0.60, 8.45],
            zlevel: 16,
            animationEasing: "backInOut"
        },
        {
            name: '2019-2020',
            value: [25.34, 10.21, 1.16, 0.54, 7.82],
            zlevel: 17,
            animationEasing: "elasticInOut"
        }
    ]
    const powerColor = ['#ffdd59', '#474787', '#00FFFF', '#808000', '#FF7F50', '#006400', '#008B8B', '#4682B4', '#FFB6C1', '#4cd137', '#f0932b', '#EA2027', '#1e272e', '#8F33CC', '#c7ecee', '#f368e0', '#0652DD']

    var img = new Image();
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');

    canvas.width = myChart.getWidth() * window.devicePixelRatio;
    canvas.height = myChart.getHeight() * window.devicePixelRatio;

    var fullImage = new Image();
    img.onload = function() {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        fullImage.src = canvas.toDataURL();
        setTimeout(function() {
            myChart.resize();
        }, 100)
    }


    option = {

        grid: {
            left: '5%',
            right: '25%',
            top: '70%',
            bottom: '2%',
            containLabel: true,
        },
        xAxis: {
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                interval: 0,
            },
            axisLine: {
                lineStyle: {
                    type: 'solid',
                    color: '#161616',
                    width: '1'
                }
            },
            axisLabel: {

                interval: 0,
                textStyle: {
                    color: '#fff'
                }
            },

            data: ['03-04', '04-05', '05-06', '06-07', '07-08', '08-09', '09-10', '10-11', '11-12', '12-13', '13-14', '14-15', '15-16', '16-17', '17-18', '18-19', '19-20']
        },
        yAxis: {
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    type: 'solid',
                    color: '#161616',
                    width: '1'
                }
            },
            axisLabel: {

                interval: 0,
                textStyle: {
                    color: '#fff'
                }
            },
        },

        backgroundColor: {
            type: "pattern",
            repeat: "repeat",
            image: fullImage
        },
        title: {
            text: '',
            top: 100,
            textStyle: {
                color: '#c38743',
                fontSize: 40,
                textShadowColor: "#d2dae2",
                textShadowBlur: 3,
                textShadowOffsetX: 1,
                textShadowOffsetY: 1
            }
        },
        tooltip: {},
        legend: {
            borderRadius: 5,
            textStyle: {
                color: "#946243",
                fontWeight: 'bolder',
            },
            inactiveColor: "#485460",
            itemWidth: 25,
            itemHeight: 25,
            tooltip: {
                show: true
            },

            data: [{
                    name: '2003-2004',
                },
                {
                    name: '2004-2005',
                },
                {
                    name: '2005-2006',
                },
                {
                    name: '2006-2007',
                },
                {
                    name: '2007-2008',
                },
                {
                    name: '2008-2009',
                },
                {
                    name: '2009-2010',
                },
                {
                    name: '2010-2011',
                },
                {
                    name: '2011-2012',
                },
                {
                    name: '2012-2013',
                },
                {
                    name: '2013-2014',
                },
                {
                    name: '2014-2015',
                },
                {
                    name: '2015-2016',
                },
                {
                    name: '2016-2017',
                },
                {
                    name: '2017-2018',
                },
                {
                    name: '2018-2019',
                },
                {
                    name: '2019-2020',
                }
            ]
        },
        radar: {
            center: ['50%', '40%'],
            radius: '65%',
            name: {
                textStyle: {
                    color: '#946243',
                    backgroundColor: '#d8a373',
                    borderRadius: 50,
                    padding: [10, 10],
                    fontSize: 15
                }
            },
            textStyle: {
                fontSize: 20
            },
            indicator: [{
                    name: 'Average points',
                    max: 40
                },
                {
                    name: 'Average assits',
                    max: 11
                },
                {
                    name: 'Average steals',
                    max: 2.3
                },
                {
                    name: 'Average blocks',
                    max: 1.3
                },
                {
                    name: 'Average rebounds',
                    max: 10
                }
            ]
        },
        color: powerColor,
        series: [

            {

                name: 'Average points',
                type: 'line',
                smooth: true,
                symbol: 'circle',
                symbolSize: 13,
                lineStyle: {
                    normal: {
                        width: 3,
                        shadowColor: 'rgba(155, 18, 184, .4)',
                        shadowBlur: 5,
                        shadowOffsetY: 20,
                        shadowOffsetX: 0,
                        color: '#fb7636',
                    }
                },
                itemStyle: {
                    color: '#fb7636',
                    borderColor: "#fff",
                    borderWidth: 2,
                },

                data: [20.94, 27.19, 31.28, 26.87, 29.73, 29.45, 29.63, 26.08, 28, 26.59, 27.19, 26.34, 25.48, 27.66, 28.84, 27.36, 25.34]
            },
            {
                name: 'Average assits',
                type: 'line',
                smooth: true,
                symbol: 'circle',
                symbolSize: 13,
                lineStyle: {
                    normal: {
                        width: 3,
                        shadowColor: 'rgba(155, 18, 184, .4)',
                        shadowBlur: 5,
                        shadowOffsetY: 20,
                        shadowOffsetX: 0,
                        color: '#24b314',
                    }
                },
                itemStyle: {
                    color: '#24b314',
                    borderColor: "#fff",
                    borderWidth: 2,
                },

                data: [5.89, 7.21, 6.49, 6.42, 7.25, 7.25, 8.45, 6.77, 6.07, 7.1, 6.01, 7.64, 6.95, 8.55, 9.09, 8.25, 10.21]
            },
            {
                name: 'Average steals',
                type: 'line',
                smooth: true,
                symbol: 'circle',
                symbolSize: 13,
                lineStyle: {
                    normal: {
                        width: 3,
                        shadowColor: 'rgba(155, 18, 184, .4)',
                        shadowBlur: 5,
                        shadowOffsetY: 20,
                        shadowOffsetX: 0,
                        color: '#027ad7',
                    }
                },
                itemStyle: {
                    color: '#027ad7',
                    borderColor: "#fff",
                    borderWidth: 2,
                },

                data: [1.65, 2.21, 1.53, 1.62, 1.83, 1.68, 1.66, 1.59, 1.86, 1.72, 1.62, 1.6, 1.58, 1.38, 1.4, 1.31, 1.16]
            },
            {
                name: 'Average blocks',
                type: 'line',
                smooth: true,
                symbol: 'circle',
                symbolSize: 13,
                lineStyle: {
                    normal: {
                        width: 3,
                        shadowColor: 'rgba(155, 18, 184, .4)',
                        shadowBlur: 5,
                        shadowOffsetY: 20,
                        shadowOffsetX: 0,
                        color: '#8452e7',
                    }
                },
                itemStyle: {
                    color: '#8452e7',
                    borderColor: "#fff",
                    borderWidth: 2,
                },

                data: [0.73, 0.65, 0.82, 0.66, 1.11, 1.11, 1.11, 0.76, 0.78, 0.86, 0.38, 0.79, 0.78, 0.73, 0.9, 0.6, 0.54]
            },
            {
                name: 'Average rebounds',
                type: 'line',
                smooth: true,
                symbol: 'circle',
                symbolSize: 13,
                lineStyle: {
                    normal: {
                        width: 3,
                        shadowColor: 'rgba(155, 18, 184, .4)',
                        shadowBlur: 5,
                        shadowOffsetY: 20,
                        shadowOffsetX: 0,
                        color: '#FF1493',
                    }
                },
                itemStyle: {
                    color: '#FF1493',
                    borderColor: "#fff",
                    borderWidth: 2,
                },

                data: [5.47, 7.35, 7.18, 7.01, 7.89, 7.8, 7.54, 7.66, 8.42, 8.11, 6.95, 7.21, 7.89, 8.73, 8.74, 8.45, 7.82]
            },
        ]
    }

    let tempSeries = {
        type: 'radar',
        areaStyle: {
            opacity: 0.3,
        },
        emphasis: {
            areaStyle: {
                opacity: 0.8,
                shadowBlur: 10,
            },
        },
        label: {
            show: true,
            position: "inside",
            fontSize: 16
        },
        lineStyle: {
            shadowBlur: 20,
            opacity: 0.8,
        }
    }
    let tempData = [...JamesData]
    let tempColor = [...powerColor]
    const intv = setInterval(function() {
        if (tempData.length === 0) {
            clearInterval(intv)
            return
        }
        let copySeries = JSON.parse(JSON.stringify(tempSeries))
        copySeries.data = [tempData.shift()]
        copySeries.zlevel = copySeries.data[0].zlevel
        copySeries.animationEasing = copySeries.data[0].animationEasing
        option.series.push(copySeries)
        myChart.setOption(option)
    }, 1000)