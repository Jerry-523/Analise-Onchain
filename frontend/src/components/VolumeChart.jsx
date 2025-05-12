import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export default function VolumeChart({ data }) {
  return (
    <>
      <h3>Volume diário (7 dias)</h3>
      <LineChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis domain={['auto', 'auto']} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="volume" stroke="#8884d8" />
      </LineChart>
    </>
  );
}
