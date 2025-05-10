
const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/metrics', async (req, res) => {
    try {
        const ethData = await axios.get('https://api.coingecko.com/api/v3/coins/ethereum/market_chart', {
            params: {
                vs_currency: 'usd',
                days: '7'
            }
        });

        res.json({
            prices: ethData.data.prices,
            volumes: ethData.data.total_volumes
        });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

router.get('/wallet-profit', async (req, res) => {
    try {
        // Simulando retorno da IntoTheBlock
        res.json({
            inTheMoney: 42.56,
            atTheMoney: 1.12,
            outTheMoney: 56.32
        });
    } catch (err) {
        res.status(500).json({ error: 'Failed to load wallet profit data' });
    }
});

module.exports = router;
