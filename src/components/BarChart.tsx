
import React from 'react';
import ReactECharts from 'echarts-for-react';

const BarChart: React.FC<{ data: any[] }> = ({ data }) => {
    const dataAll: any = data.map((item) => {
        return [
            { "name": "Alcohol", value: item["Alcohol"] },
            { "name": "Malic Acid", value: item["Malic Acid"] },
            { "name": "Ash", value: item["Ash"] },
            { "name": "Alcalinity of ash", value: item["Alcalinity of ash"] },
            { "name": "Magnesium", value: item["Magnesium"] },
            { "name": "Total phenols", value: item["Total phenols"] },
            { "name": "Flavanoids", value: item["Flavanoids"] },
            { "name": "Nonflavanoid phenols", value: item["Nonflavanoid phenols"] },
            { "name": "Proanthocyanins", value: item["Proanthocyanins"] },
            { "name": "Color intensity", value: item["Color intensity"] },
            { "name": "Hue", value: item["Hue"] },
            { "name": "OD280/OD315 of diluted wines", value: item["OD280/OD315 of diluted wines"] },
            { "name": "Unknown", value: item["Unknown"] },
        ]
    })
    const newdata: any = []
    console.log(newdata);

    for (let i of dataAll) {
        newdata.push(i)

    }
    console.log(dataAll, "dataAll");

    const option = {
        title: {
            text: 'ECharts Bar'
        },
        tooltip: {},
        legend: {
            data: ['Bar Chart']
        },
        xAxis: {
            data: dataAll[0].map((item: any) => { return item.name })
        },
        yAxis: {},
        series: [{
            name: 'Bar Chart',
            type: 'bar',
            data: (function () {
                var array = [];
                var i
                for (i = 0; i < dataAll.length; i++) {
                    array[i] = (Math.random() * 60);
                }
                return array;
            })()
        }]
    };

    return <ReactECharts
        option={option}
        style={{ height: 400 }}
        opts={{ renderer: 'svg' }}
    />;
};

export default BarChart;