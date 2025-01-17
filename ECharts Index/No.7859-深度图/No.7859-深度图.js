var arr1 = [   
    [
      0.02247371,
      2789.357
    ]
   ,
    [
      0.02250001,
      2786.6045
    ],
    [
      0.02293319,
      2777.489
    ],
    [
      0.02321,
      2774.7905
    ],   
    [
      0.02340185,
      2771.2329
    ],
    [
      0.02387989,
      2768.5873
    ],
    [
      0.02436749,
      2765.9936
    ],
    [
      0.0245,
      2763.4508
    ],
    [
      0.02450001,
      2657.9508
    ],
    [
      0.02451,
      2653.4508
    ],
   
    [
      0.02486484,
      2650.0008
    ],
    [
      0.02537213,
      2647.5078
    ],
    [
      0.02588958,
      2645.0637
    ],
   
    [
      0.02611,
      2642.6675
    ],
    [
      0.02641737,
      2639.2175
    ],
     [
      0.0265,
      2636.8683
    ],
    [
      0.02695571,
      2596.3683
    ],
    [
      0.027,
      2594.0652
    ],
    [
      0.02737,
      2048.5092
    ],
    [
      0.02737268,
      2034.1364
    ],
    [
      0.02751001,
      1352.6364
    ],
    [
      0.02751002,
      1334.7921
    ],
    [
      0.02771253,
      1284.915
    ],
     [
      0.0277567,
      1249.2092
    ],
    [
      0.02778522,
      567.7092
    ],
    [
      0.02780501,
      499.5592
    ],
    [
      0.02780502,
      493.5106
    ],
    [
      0.02780505,
      346.4356
    ],
    [
      0.02780506,
      209.1656
    ],
    [
      0.02780507,
      197.6656
    ]
  ];
var arr2 = [
    [
      0.02901264,
      13.3326
    ],
    [
      0.02906492,
      13.6267
    ],
    [
      0.02913668,
      25.1267
    ],
    [
      0.02917356,
      28.9267
    ],
    [
      0.02917898,
      97.0767
    ],
    [
      0.02917899,
      99.4656
    ],
    [
      0.02926295,
      780.9656
    ],
    [
      0.02926296,
      816.6714
    ],
    [
      0.02958494,
      1125.0639
    ],
    [
      0.02963622,
      1127.0715
    ],
    [
      0.02990769,
      1133.4377
    ],
    [
      0.0305,
      1151.6043
    ],
    [
      0.03127848,
      1201.6043
    ],
    [
      0.0315,
      1205.2098
    ],
    [
      0.03176393,
      1207.6077
    ],
    [
      0.0321,
      1227.5777
    ],
    [
      0.03268563,
      1230.5149
    ],
    [
      0.03588,
      1508.1539
    ]
  ];
option = {
   backgroundColor: '#141E46',
    title: {
        text: ''
    },
      tooltip : {
            trigger: 'axis',
            formatter:function(params){
                var res='<p>Price:'+params[0].name+'</p>' 
                for(var i=0;i<params.length;i++){
                    res+='<p>'+params[i].marker+params[i].seriesName+':'+params[i].value[1]+'</p>'
                }
                return res;
            },
            position: function (point, params, dom, rect, size) {
                return [point[0], point[1]];
            },
            backgroundColor:"#222E5D",
            axisPointer: {
                type: 'cross',
                lineStyle:{
                    color:'#60698D',
                    type:'dashed'
                },
                label: {
                    show:false,//坐标指示器
                    fontSize:11,
                    backgroundColor: '#222E5D',
                }
            }
        },

 
    grid: {
        containLabel: true,
        left: '0%',
        right: '0%',
        bottom: '0%'
    },
    textStyle:{
        color:'#fff'
    },
    animation:false,
    xAxis : 
        { 
            type : 'category',
            boundaryGap : false,
            axisLine:{
                lineStyle: {
                    color: "transparent"
                }
            },
             axisLabel: {
                margin: 0,
                align: "center",
                showMaxLabel:false,
                showMinLabel: false//不显示X轴最小刻度
            },
            show:true
        }
    ,
    yAxis : [
        {
            nameTextStyle:{
                fontSize:10,
                color:"#fff"
            },
            offset:0,
            type : 'value',
            splitLine:{show: false},
            axisTick:{
                show:false,
                color:"#fff"
            },
             axisLine:{
                show:false
            },
            axisLabel:{fontSize:10,
                inside:true,
                color:"#fff"
            }
        },
        {
            position:'right',
            nameTextStyle:{
                fontSize:10,
                color:"#fff"
            },
            offset:0,
            type : 'value',
            splitLine:{show: false},
            axisTick:{
                show:false,
                color:"#fff"
            },
             axisLine:{
                show:false
            },
            axisLabel:{fontSize:10,
                inside:true,
                color:"#fff"
            }
        }],
    series : [
            {
            name:'Asks',
            showSymbol:false,
            symbol:"circle",
            zlevel:-21,
            yAxisIndex: '0',// 第一个柱状图的数据
            label:{
                show:false,
                distance:22,
                color:"#fff",
                fontSize:12,
                align:"center",
                verticalAlign:"middle",
                backgroundColor:"#222E5D",
                padding: [10, 15, 10, 15],
            },
            symbolSize:11,
            connectNulls:true,
            step:true,
            emphasis:{
            
            },
            lineStyle:{
                
            },
            type:'line', 
            itemStyle: {
                normal: {
                    color: '#01C57B',
                    borderColor:'#01C57B',
                
                }
            },
           
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#00fd9d'
                    }, {
                        offset: 1,
                        color: '#141E46'
                    }])
                }
            },
             
            data:arr1
        },
        {
            zlevel:-21,
            yAxisIndex: '1',
            name:'bids',
             showSymbol:false,
            symbol:"circle",
            label:{
                show:false,
                distance:22,
                color:"#fff",
                fontSize:12,
                align:"center",
                verticalAlign:"middle",
                backgroundColor:"#222E5D",
                padding: [10, 15, 10, 15],
            },
            symbolSize:11,
            connectNulls:true,
            step:true,
            type:'line',
            stack: '总量',
            itemStyle: {
                normal: {
                    color: '#D8195A'
                }
            },
            areaStyle: {normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#D8195A'
                    }, {
                        offset: 1,
                        color: '#141E46'
                    }])
                }},
            
            data:arr2
        }
    ]
};