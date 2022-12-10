import * as echarts from 'echarts';
import 'echarts-wordcloud'
export function myEcharts(data) {
    var myChart = echarts.init(document.getElementById('mzgqc'))
    var option = {
        series: [{
            type: 'wordCloud',
            //maskImage: maskImage,
            sizeRange: [15, 80],
            rotationRange: [0, 0],
            rotationStep: 45,
            gridSize: 8,
            shape: 'pentagon',
            width: '100%',
            height: '100%',
            textStyle: {
                color: function () {
                    return 'rgb(' + [
                        Math.round(Math.random() * 160),
                        Math.round(Math.random() * 160),
                        Math.round(Math.random() * 160)
                    ].join(',') + ')';
                },
                fontFamily: 'sans-serif',
                fontWeight: 'bold'
            },
            data
        }]
    };
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });

}