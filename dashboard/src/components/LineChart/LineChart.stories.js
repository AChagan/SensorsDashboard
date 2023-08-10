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
        createTs: new Date(),
    },
    {
        sensorId: '1',
        c02: 500,
        temperature: 26,
        humidity: 30,
        createTs: new Date(+new Date() - 1000 * 60 * 60 * 24),
    },
];

export const SingleLine = () => (
    <LineChart data={data} title={'Single Sensor Reading'}>
        Single Sensor Readings
    </LineChart>
);
