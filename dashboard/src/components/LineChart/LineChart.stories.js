import LineChart from './LineChart';

export default {
    title: 'LineChart',
    component: LineChart,
};

const data = [
    {
        sensorId: '1',
        c02: 400,
        temperature: 25,
        humidity: 20,
        createTs: new Date('2023-01-10'),
    },
    {
        sensorId: '1',
        c02: 500,
        temperature: 26,
        humidity: 30,
        createTs: new Date('2023-01-11'),
    },
    {
        sensorId: '2',
        c02: 450,
        temperature: 25,
        humidity: 20,
        createTs: new Date('2023-01-10'),
    },
    {
        sensorId: '2',
        c02: 400,
        temperature: 26,
        humidity: 30,
        createTs: new Date('2023-01-11'),
    },
];


export const SingleLine = () => (
    <LineChart
        data={data}
        title={'Sensor Readings'}
        xAxisTitle="Dates"
        yAxisTitle="C02 ppm"
    />
);
