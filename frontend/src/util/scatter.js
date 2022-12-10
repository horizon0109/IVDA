import * as echarts from 'echarts';
export function myEcharts(data,sharch) {
    var domDiv = document.getElementById('main')
    //const width = document.documentElement.clientWidth
    //myScatterPlot.style.width =  ${ width }px
    //myScatterPlot.style.height = '${width * 1.2}px'
    var myScatterPlot = echarts.init(domDiv)
    //myScatterPlot.resize()

    let option = {
        title: {
            text: sharch+"'s Correlation ScatterPlot with others",
            left: 'center',
            top: 0
        },
        grid: [
            { left: '7%', top: '7%', width: '38%', height: '38%' },
            { right: '7%', top: '7%', width: '38%', height: '38%' },
            { left: '7%', bottom: '7%', width: '38%', height: '38%' },
            { right: '7%', bottom: '7%', width: '38%', height: '38%' }
        ],
        tooltip: {
            formatter: '{a}: ({c})'
        },
        xAxis: [
            { gridIndex: 0},
            { gridIndex: 1},
            { gridIndex: 2},
            { gridIndex: 3}
        ],
        yAxis: [
            { gridIndex: 0},
            { gridIndex: 1},
            { gridIndex: 2},
            { gridIndex: 3}
        ],
        series: [
            {
                name: data[0]['address'],
                type: 'scatter',
                xAxisIndex: 0,
                yAxisIndex: 0,
                data: data[0]['key'],
            },
            {
                name: data[1]['address'],
                type: 'scatter',
                xAxisIndex: 1,
                yAxisIndex: 1,
                data: data[1]['key'],
            },
            {
                name: data[2]['address'],
                type: 'scatter',
                xAxisIndex: 2,
                yAxisIndex: 2,
                data: data[2]['key'],
            },
            {
                name: data[3]['address'],
                type: 'scatter',
                xAxisIndex: 3,
                yAxisIndex: 3,
                data: data[3]['key'],
            }
        ]
    }
    myScatterPlot.setOption(option)
    //option && myScatterPlot.setOption(option)
    window.onresize = function(){
        myScatterPlot.resize();
    }
}