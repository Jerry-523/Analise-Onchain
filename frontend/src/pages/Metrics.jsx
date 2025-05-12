import React, { useEffect, useState } from 'react';
import ProfitChart from '../components/ProfitChart';
import VolumeChart from '../components/VolumeChart';

export default function Metrics() {
  const [coin, setCoin] = useState('ethereum');
  const [data, setData] = useState(null);
  const [walletProfit, setWalletProfit] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/api/metrics?coin=${coin}`)
      .then(res => res.json())
      .then(setData);

    fetch(`http://localhost:3001/api/wallet-profit`)
      .then(res => res.json())
      .then(setWalletProfit);
  }, [coin]);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Métricas para {coin.toUpperCase()}</h2>
      <select value={coin} onChange={(e) => setCoin(e.target.value)}>
        <option value="ethereum">Ethereum</option>
        <option value="bitcoin">Bitcoin</option>
        <option value="solana">Solana</option>
      </select>

      {data && <VolumeChart data={data.volume_7d} />}
      {walletProfit && <ProfitChart data={walletProfit} />}
    </div>
  );
}
