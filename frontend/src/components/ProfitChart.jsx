import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const COLORS = ['#00C49F', '#FFBB28', '#FF8042'];

export default function ProfitChart({ data }) {
  const chartData = [
    { name: 'Em Lucro', value: data.inTheMoney },
    { name: 'Equilíbrio', value: data.atTheMoney },
    { name: 'Prejuízo', value: data.outTheMoney }
  ];

  return (
    <>
      <h3>Distribuição de Carteiras</h3>
      <PieChart width={400} height={300}>
        <Pie data={chartData} dataKey="value" cx="50%" cy="50%" outerRadius={90}>
          {chartData.map((_, index) => (
            <Cell key={index} fill={COLORS[index]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </>
  );
}
