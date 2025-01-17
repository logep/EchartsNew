var vehicleSymbolPath = "path://M1024 476.279467c0 0 0 33.4848 0 41.591467 0 72.362667 0 136.6528 0 136.6528 0 15.479467-12.100267 28.040533-27.016533 28.040533l-41.284267 0c0-56.610133-45.8752-102.5024-102.4512-102.5024s-102.4512 45.8752-102.4512 102.5024L290.304 682.564267c-0.017067-56.610133-45.8752-102.5024-102.468267-102.5024-56.558933 0-102.434133 45.8752-102.4512 102.5024L27.0336 682.564267c-14.916267 0-27.016533-12.544-27.016533-28.040533L0.017067 318.173867C0.017067 290.423467 17.988267 273.066667 44.100267 273.066667c0 0 811.3152 0 844.032 0s98.4576 43.281067 124.125867 101.870933C1025.655467 406.289067 1024 476.279467 1024 476.279467zM170.786133 324.317867 78.574933 324.317867c-15.086933 0-27.323733 12.219733-27.323733 27.306667l0 81.834667c0 15.086933 12.2368 27.2896 27.323733 27.2896l92.2112 0L170.786133 324.317867zM324.471467 324.317867l-119.534933 0 0 136.413867 119.534933 0L324.471467 324.317867zM477.610667 324.317867l-119.005867 0 0 136.413867 119.005867 0L477.610667 324.317867zM631.210667 324.317867l-119.005867 0 0 136.413867 119.005867 0L631.210667 324.317867zM784.896 324.317867l-119.534933 0 0 136.413867 119.534933 0L784.896 324.317867zM784.8448 524.919467c0-7.0144-7.645867-12.6976-17.083733-12.6976s-17.066667 5.6832-17.066667 12.6976l0 25.361067c0 7.0144 7.6288 12.6976 17.066667 12.6976s17.083733-5.6832 17.083733-12.6976L784.8448 524.919467zM966.024533 404.155733c-11.008-46.728533-71.3728-79.837867-88.1152-79.837867-41.0112 0-58.845867 0-58.845867 0l0 136.413867L971.741867 460.8C971.741867 460.8 974.848 441.719467 966.024533 404.155733zM187.835733 614.2464c37.717333 0 68.3008 30.600533 68.3008 68.352 0 37.7344-30.583467 68.334933-68.3008 68.334933-37.7344 0-68.3008-30.600533-68.3008-68.334933C119.534933 644.846933 150.101333 614.2464 187.835733 614.2464zM853.265067 614.2464c37.717333 0 68.3008 30.600533 68.3008 68.352 0 37.7344-30.583467 68.334933-68.3008 68.334933-37.7344 0-68.317867-30.600533-68.317867-68.334933C784.9472 644.846933 815.530667 614.2464 853.265067 614.2464z";
var upStreamMinSequence = 1;
var upStreamMaxSequence = 25;
var upStreamStationsNameArray = ["徐村","徐江办事处","徐江工业区","梦娜袜业","交通设计院地横头","九联工业区","荷叶口","钓鱼矶公园","稠州中学丹溪校区","下傅小区","下付︵珍禾铁皮石斛︶","实验小学︵江南小区︶","中心医院︵龚大塘︶","江东公交站︵南︶","江东公交站︵东︶","篁园服装市场︵西︶","稠州公园","青少年宫","绣湖公园","市体育馆","绣湖中学︵园丁新村︶","丹溪一小区","丹溪三小区","北苑商贸区","市行政服务中心"];
var upStreamScatterNumArray = [[0],[1],[2],[3],[4],[5],[6],[7],[8],[9],[10],[11],[12],[13],[14],[15],[16],[17],[18],[19],[20],[21],[22],[23],[24]];
var upStreamVehiclesArray = [[1,"GC5725"],[2,"GC5780"],[10,"GC5715"],[11,"GC5792"],[16,"GC5620"],[20,"GC5727"],[21,"GC5772"]];

var downStreamMinSequence = 1;
var downStreamMaxSequence = 25;
var downStreamStationsNameArray = ["徐村","徐江办事处","徐江工业区","梦娜袜业","交通设计院地横头","九联工业区","荷叶口","钓鱼矶公园","稠州中学丹溪校区","下傅小区","下付︵珍禾铁皮石斛︶","实验小学︵江南小区︶","中心医院︵龚大塘︶","江东公交站︵南︶","江东公交站︵东︶","篁园服装市场︵西︶","绣湖广场︵解百义乌购物中心︶","青少年宫","绣湖公园","市体育馆","绣湖中学︵园丁新村︶","丹溪一小区","丹溪三小区","北苑商贸区","市行政服务中心"];
var downStreamScatterNumArray = [[0],[1],[2],[3],[4],[5],[6],[7],[8],[9],[10],[11],[12],[13],[14],[15],[16],[17],[18],[19],[20],[21],[22],[23],[24]];
var downStreamVehiclesArray = [[23,"GC5795"],[19,"GC5763"],[16,"GC5759"],[16,"GC5796"],[5,"GC5598"]];

var option = {
        title:{
            text:'This is title',
            left:'center',
            top:'middle',
            textStyle:{
                fontSize:18
            }
        },
        singleAxis: [{
            type: "value",
            top: "35",
            height: "20",
            splitLine: {
                show: false
            },
            interval: 1,
            axisLabel: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    shadowBlur: 10,
                    shadowColor: '#3FB5AE',
                    opacity: 1
                }
            },
            min: upStreamMinSequence,
            max: upStreamMaxSequence
        }, {
            type: "category",
            boundaryGap: false,
            top: "45",
            height: "20",
            splitLine: {
                show: false
            },
            axisLabel: {
                interval: 0,
                textStyle: {
                    fontSize: 14
                },
                formatter: function (value, index) {
                    return value ? value.split("").join('\n') : ""; //竖排文字
                }
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            data: upStreamStationsNameArray
        }, {
            type: "value",
            bottom: "65",
            height: "20",
            splitLine: {
                show: false
            },
            interval: 1,
            axisLabel: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    shadowBlur: 10,
                    shadowColor: '#3FB5AE',
                    opacity: 1
                }
            },
            min: downStreamMinSequence,
            max: downStreamMaxSequence
        }, {
            type: "category",
            boundaryGap: false,
            bottom: "75",
            height: "20",
            splitLine: {
                show: false
            },
            axisLabel: {
                interval: 0,
                textStyle: {
                    fontSize: 14
                },
                formatter: function (value, index) {
                    return value ? value.split("").join('\n') : ""; //竖排文字
                },
                inside: true
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            data: downStreamStationsNameArray
        }],
        series: [{
            singleAxisIndex: 0,
            coordinateSystem: "singleAxis",
            type: "scatter",
            symbol: "path://M1024 476.279467c0 0 0 33.4848 0 41.591467 0 72.362667 0 136.6528 0 136.6528 0 15.479467-12.100267 28.040533-27.016533 28.040533l-41.284267 0c0-56.610133-45.8752-102.5024-102.4512-102.5024s-102.4512 45.8752-102.4512 102.5024L290.304 682.564267c-0.017067-56.610133-45.8752-102.5024-102.468267-102.5024-56.558933 0-102.434133 45.8752-102.4512 102.5024L27.0336 682.564267c-14.916267 0-27.016533-12.544-27.016533-28.040533L0.017067 318.173867C0.017067 290.423467 17.988267 273.066667 44.100267 273.066667c0 0 811.3152 0 844.032 0s98.4576 43.281067 124.125867 101.870933C1025.655467 406.289067 1024 476.279467 1024 476.279467zM170.786133 324.317867 78.574933 324.317867c-15.086933 0-27.323733 12.219733-27.323733 27.306667l0 81.834667c0 15.086933 12.2368 27.2896 27.323733 27.2896l92.2112 0L170.786133 324.317867zM324.471467 324.317867l-119.534933 0 0 136.413867 119.534933 0L324.471467 324.317867zM477.610667 324.317867l-119.005867 0 0 136.413867 119.005867 0L477.610667 324.317867zM631.210667 324.317867l-119.005867 0 0 136.413867 119.005867 0L631.210667 324.317867zM784.896 324.317867l-119.534933 0 0 136.413867 119.534933 0L784.896 324.317867zM784.8448 524.919467c0-7.0144-7.645867-12.6976-17.083733-12.6976s-17.066667 5.6832-17.066667 12.6976l0 25.361067c0 7.0144 7.6288 12.6976 17.066667 12.6976s17.083733-5.6832 17.083733-12.6976L784.8448 524.919467zM966.024533 404.155733c-11.008-46.728533-71.3728-79.837867-88.1152-79.837867-41.0112 0-58.845867 0-58.845867 0l0 136.413867L971.741867 460.8C971.741867 460.8 974.848 441.719467 966.024533 404.155733zM187.835733 614.2464c37.717333 0 68.3008 30.600533 68.3008 68.352 0 37.7344-30.583467 68.334933-68.3008 68.334933-37.7344 0-68.3008-30.600533-68.3008-68.334933C119.534933 644.846933 150.101333 614.2464 187.835733 614.2464zM853.265067 614.2464c37.717333 0 68.3008 30.600533 68.3008 68.352 0 37.7344-30.583467 68.334933-68.3008 68.334933-37.7344 0-68.317867-30.600533-68.317867-68.334933C784.9472 644.846933 815.530667 614.2464 853.265067 614.2464z",
            symbolSize: [40, 20],
            symbolOffset: [
                0,
                -15
            ],
            label: {
                normal: {
                    show: true,
                    position: [-7, -20],
                    formatter: function (data) {
                        return data.value[1];
                    },
                    color: 'white',
                    backgroundColor: 'black',
                    borderRadius: 3,
                    padding: [2, 2, 2, 2]
                }
            },
            data: upStreamVehiclesArray
        }, {
            singleAxisIndex: 1,
            coordinateSystem: "singleAxis",
            type: "scatter",
            symbolSize: 15,
            itemStyle: {
                normal: {
                    opacity: 1,
                    color: 'white',
                    borderColor: 'black'
                }
            },
            data: upStreamScatterNumArray
        }, {
            singleAxisIndex: 2,
            coordinateSystem: "singleAxis",
            type: "scatter",
            symbol: vehicleSymbolPath,
            symbolSize: [40, 20],
            symbolOffset: [
                0,
                60
            ],
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    formatter: function (data) {
                        return data.value[1];
                    },
                    color: 'white',
                    backgroundColor: 'black',
                    borderRadius: 3,
                    padding: [2, 2, 2, 2]
                }
            },
            data: downStreamVehiclesArray
        }, {
            singleAxisIndex: 3,
            coordinateSystem: "singleAxis",
            type: "scatter",
            symbolSize: 15,
            itemStyle: {
                normal: {
                    opacity: 1,
                    color: 'white',
                    borderColor: 'black'
                }
            },
            symbolOffset: [
                0,
                20
            ],
            data: downStreamScatterNumArray
        }]
    };