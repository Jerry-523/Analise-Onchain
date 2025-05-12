const express = require('express');
const axios = require('axios');
const router = express.Router();

const supportedCoins = ['bitcoin', 'ethereum', 'solana'];

router.get('/metrics', async (req, res) => {
  const { coin = 'ethereum' } = req.query;

  if (!supportedCoins.includes(coin)) {
    return res.status(400).json({ error: 'Moeda não suportada' });
  }

  try {
    const [marketData, chartData] = await Promise.all([
      axios.get(`https://api.coingecko.com/api/v3/coins/${coin}`),
      axios.get(`https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=usd&days=7`)
    ]);

    const volumeData = chartData.data.total_volumes.map(([timestamp, volume]) => ({
      date: new Date(timestamp).toLocaleDateString(),
      volume: Number(volume.toFixed(2))
    }));

    const response = {
      name: marketData.data.name,
      holders: marketData.data.community_data.twitter_followers,
      circulating_supply: marketData.data.market_data.circulating_supply,
      total_supply: marketData.data.market_data.total_supply,
      market_cap: marketData.data.market_data.market_cap.usd,
      gas_fees: Math.random() * 5,
      volume_7d: volumeData
    };

    res.json(response);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar dados da API' });
  }
});

router.get('/wallet-profit', (req, res) => {
  const simulated = {
    inTheMoney: 43.2,
    atTheMoney: 1.1,
    outTheMoney: 55.7
  };

  res.json(simulated);
});

module.exports = router;

