const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const { simulateCampaignStats } = require('./services/simulator');
const Customer = require('./models/Customer');
const Campaign = require('./models/Campaign');
const Order = require('./models/Order');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI);

// 1. Customer CRUD
app.get('/api/customers', async (req, res) => res.json(await Customer.find()));

// 2. Order Create + Auto Calculate Spend (Req #4)
app.post('/api/orders', async (req, res) => {
  const order = await Order.create(req.body);
  await Customer.findByIdAndUpdate(req.body.customerId, {
    $inc: { totalSpend: req.body.amount, purchaseCount: 1 },
    lastPurchaseDate: new Date()
  });
  res.json(order);
});

// 3. Campaign Send + Simulator (Req #8)
app.post('/api/campaigns', async (req, res) => {
  const campaign = await Campaign.create(req.body);
  simulateCampaignStats(campaign._id); // Trigger Simulator
  res.json(campaign);
});

// 4. Callback Webhook (Req #8)
app.post('/api/callback', async (req, res) => {
  const { campaignId, status } = req.body;
  const update = { $inc: { [`stats.${status}`]: 1 } };
  await Campaign.findByIdAndUpdate(campaignId, update);
  res.sendStatus(200);
});

// 5. AI Campaign Assistant (Req #7)
app.post('/api/ai/chat', async (req, res) => {
    // Yaha Gemini logic aayega (previous code wala)
    res.json({ suggestedAudience: "High Spenders", content: "Buy our new shoes!" });
});

app.listen(5000, () => console.log("Backend Running on 5000"));