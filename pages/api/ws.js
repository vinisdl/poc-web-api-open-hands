import { executeAction } from "../../lib/wsClient";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { action, conversationId, message } = req.body;
    if (!action) {
      res.status(400).json({ error: "Missing action parameter." });
      return;
    }
    try {
      const result = await executeAction(action, conversationId, message);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message || error });
    }
  } else {
    res.status(405).json({ error: "Method not allowed. Use POST method." });
  }
}
