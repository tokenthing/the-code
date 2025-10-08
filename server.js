const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Replace with your actual Discord webhook URL
const DISCORD_WEBHOOK_URL = 'https://discord.com/api/webhooks/your_webhook_id/your_webhook_token';

app.use(cors());
app.use(bodyParser.json());

app.post('/send', async (req, res) => {
  const { content } = req.body;
  try {
    await fetch(DISCORD_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content })
    });
    res.status(200).send('Message sent');
  } catch (error) {
    res.status(500).send('Error sending message');
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
