import './LineChart.css';
import {
    LineChart as RechartLineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from 'recharts';

function LineChart(props) {
    const { title, data, children, ...rest } = props;

    return (
        <RechartLineChart width={400} height={400} data={data} title={title}>
            <XAxis dataKey="humidity" />
            <YAxis dataKey="c02" />
            <CartesianGrid stroke="#eee" />
            {data.map((entry, index) => console.log(entry.sensorId, entry.c02))}
            <Line type="step" dataKey="c02" stroke="#8884d8" />
            <Tooltip />
            <Legend />
        </RechartLineChart>
    );
}

export default LineChart;
