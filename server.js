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

// Simulate small random price movement (+/- 0.5%) on each request
function jitterPrice(base) {
  const change = (Math.random() - 0.5) * 0.01 * base;
  return Math.round((base + change) * 100) / 100;
}

app.get('/api/stocks', (req, res) => {
  const updatedStocks = stocks.map(stock => ({
    ...stock,
    price: jitterPrice(stock.price),
    lastUpdated: new Date().toISOString()
  }));
  res.json(updatedStocks);
});

app.listen(PORT, () => {
  console.log(`Stock app server running at http://localhost:${PORT}`);
});
