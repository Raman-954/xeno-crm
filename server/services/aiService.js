const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

exports.generateCampaignAssistant = async (prompt) => {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const fullPrompt = `You are an expert CRM marketer for XENO Engineering. 
  User request: "${prompt}"
  Respond ONLY in JSON format:
  {
    "suggestedAudience": "string",
    "channel": "Email|SMS|WhatsApp|RCS",
    "content": "personalized message text",
    "reasoning": "short explanation"
  }`;

  const result = await model.generateContent(fullPrompt);
  return JSON.parse(result.response.text());
};