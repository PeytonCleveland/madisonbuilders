import axios from "axios";

export default async function handler(req, res) {
  const payload = {
    email_address: req.body.email,
    status: "subscribed"
  };
  if (req.method === "POST") {
    try {
      await axios.post(
        `https://${process.env.MAILCHIMP_SERVER}.api.mailchimp.com/3.0/lists/f5f2b21fe2/members`,
        payload,
        { headers: { Authorization: `Basic ${process.env.MAILCHIMP_API_KEY}` } }
      );
      res.status(200).json({ email: req.body });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  } else {
    res.status(405).json({ error: "method not allowed" });
  }
}
