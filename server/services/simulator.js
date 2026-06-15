const axios = require('axios');

const simulateCampaignStats = async (campaignId) => {
  const statuses = ['delivered', 'opened', 'converted'];
  
  // Random delay to simulate real network
  setTimeout(async () => {
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
    try {
      // POST callback to our own API
      await axios.post(`${process.env.BACKEND_URL}/api/callback`, {
        campaignId,
        status: randomStatus
      });
    } catch (e) { console.log("Sim error"); }
  }, 2000);
};

module.exports = { simulateCampaignStats };