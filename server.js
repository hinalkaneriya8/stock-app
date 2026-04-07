const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const stocks = [
  {
    name: 'Apple Inc.',
    symbol: 'AAPL',
    price: 189.84,
    lastUpdated: new Date().toISOString()
  },
  {
    name: 'Tesla Inc.',
    symbol: 'TSLA',
    price: 177.58,
    lastUpdated: new Date().toISOString()
  },
  {
    name: 'Microsoft Corp.',
    symbol: 'MSFT',
    price: 415.32,
    lastUpdated: new Date().toISOString()
  },
  {
    name: 'Alphabet Inc.',
    symbol: 'GOOGL',
    price: 164.29,
    lastUpdated: new Date().toISOString()
  },
  {
    name: 'Amazon.com Inc.',
    symbol: 'AMZN',
    price: 193.61,
    lastUpdated: new Date().toISOString()
  }
];

app.get('/api/stocks', (req, res) => {
  const updatedStocks = stocks.map(stock => ({
    ...stock,
    lastUpdated: new Date().toISOString()
  }));
  res.json(updatedStocks);
});

app.listen(PORT, () => {
  console.log(`Stock app server running at http://localhost:${PORT}`);
});
