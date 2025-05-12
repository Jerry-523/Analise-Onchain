## Crypto On-Chain Analytics

Ferramenta simples de análise on-chain usando **Node.js (Express)** no backend e **React** no frontend. Exibe:

* 📈 **Volume diário** do Ethereum nos últimos 7 dias
* 💰 **Percentual de carteiras em lucro, equilíbrio e prejuízo**

---

## Estrutura do Projeto

```
crypto-onchain/
├── backend/
│   ├── routes/
│   │   └── metrics.js
│   └── server.js
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── App.jsx
│   │   ├── components/
│   │   │   ├── Dashboard.jsx
│   │   │   ├── ProfitChart.jsx
│   │   │   ├── VolumeChart.jsx
│   │   │   └── Header.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   └── Metrics.jsx
│   │   └── main.jsx
│   └── vite.config.js
└── README.md
```

---

## Como Rodar o Projeto

### Pré-requisitos

* [Node.js](https://nodejs.org/) instalado (versão 16 ou superior)
* Gerenciador de pacotes (`npm` ou `yarn`)

---

### 1. Clonar e Acessar o Projeto

```bash
unzip crypto-onchain.zip
cd crypto-onchain
```

---

### 2. Rodar o Backend (Express)

```bash
cd backend
npm init -y
npm install express axios cors
node server.js
```

> O backend ficará disponível em `http://localhost:3001`

---

### 3. Rodar o Frontend (React)

```bash
cd ../frontend
npm install
npm install vite react react-dom recharts
npx vite
```

> O frontend será iniciado em `http://localhost:5173` por padrão

---

## APIs Utilizadas

### `/api/metrics`

* Dados da CoinGecko sobre o volume diário de ETH nos últimos 7 dias

### `/api/wallet-profit`

* Simulação do retorno da API do IntoTheBlock:

```json
{
  "inTheMoney": 42.56,
  "atTheMoney": 1.12,
  "outTheMoney": 56.32
}
```

---

## 🧠 Como Funciona

* O **backend** busca dados externos e os padroniza para o frontend.
* O **frontend** consome os dados via fetch e renderiza:

  * 📊 Um **gráfico de pizza** com percentuais de carteiras
  * 📉 Um **gráfico de linha** com o volume de ETH transacionado

---

## 🚀 Melhorias Futuras

* ✅ Integração real com a API do [IntoTheBlock](https://www.intotheblock.com/) para dados on-chain mais precisos
* 🌐 Suporte a múltiplas criptomoedas (ex: BTC, SOL, MATIC)
* 🧩 Filtros por período (24h, 7d, 30d) nos gráficos
* 📅 Histórico interativo com zoom e hover
* 📲 Versão mobile responsiva
* 🛠 Deploy automático com CI/CD (ex: Vercel + Render)
* 🔐 Cache de dados com Redis para evitar múltiplas chamadas à API

