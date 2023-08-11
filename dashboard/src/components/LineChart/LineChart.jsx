import './LineChart.css';
import { LineChart as CarbonLineChart } from '@carbon/charts-react';
import '@carbon/styles/css/styles.css';
import '@carbon/charts-react/styles.css';

function LineChart(props) {
    const {
        title,
        data,
        xAxisTitle,
        yAxisTitle,
        height = '400px',
        ...rest
    } = props;

    const renderingData = data.map((item) => ({
        group: item.sensorId,
        key: new Date(item.createTs).toLocaleString(undefined, {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            hour12: false,
            minute: '2-digit',
            second: '2-digit',
        }),
        value: item.c02,
    }));

    const options = {
        title: title,
        axes: {
            bottom: {
                title: xAxisTitle,
                mapsTo: 'key',
                scaleType: 'labels',
            },
            left: {
                title: yAxisTitle,
                mapsTo: 'value',
                scaleType: 'linear',
            },
        },
        height: height,
    };

    return (
        <CarbonLineChart
            data={renderingData}
            options={options}
        ></CarbonLineChart>
    );
}

export default LineChart;
