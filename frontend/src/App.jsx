
import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const COLORS = ['#00C49F', '#FFBB28', '#FF8042'];

export default function App() {
    const [walletData, setWalletData] = useState(null);
    const [volumeData, setVolumeData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/api/wallet-profit')
            .then(res => res.json())
            .then(setWalletData);

        fetch('http://localhost:3001/api/metrics')
            .then(res => res.json())
            .then(data => {
                const formatted = data.volumes.map(([timestamp, volume]) => ({
                    time: new Date(timestamp).toLocaleDateString(),
                    volume: Number((volume / 1e6).toFixed(2)) // in millions
                }));
                setVolumeData(formatted);
            });
    }, []);

    return (
        <div style={{ padding: '2rem' }}>
            <h2>Carteiras em Lucro</h2>
            {walletData && (
                <PieChart width={400} height={300}>
                    <Pie dataKey="value" data={[
                        { name: 'Lucro', value: walletData.inTheMoney },
                        { name: 'Equilíbrio', value: walletData.atTheMoney },
                        { name: 'Prejuízo', value: walletData.outTheMoney }
                    ]} cx="50%" cy="50%" outerRadius={80} label>
                        {COLORS.map((color, index) => <Cell key={index} fill={color} />)}
                    </Pie>
                    <Tooltip />
                </PieChart>
            )}

            <h2>Volume Diário (últimos 7 dias)</h2>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={volumeData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="volume" stroke="#8884d8" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
