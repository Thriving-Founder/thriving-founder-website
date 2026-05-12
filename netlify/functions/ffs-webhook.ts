import type { Handler } from "@netlify/functions";

const WEBHOOK_URL =
  "https://nsfqezhitjycwbkovtnd.supabase.co/functions/v1/ffs-webhook";

const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: JSON.stringify({ error: "Method not allowed" }) };
  }

  const secret = process.env.FFS_WEBHOOK_SECRET;
  if (!secret) {
    console.error("FFS_WEBHOOK_SECRET is not configured");
    return { statusCode: 500, body: JSON.stringify({ error: "Server misconfigured" }) };
  }

  try {
    const payload = JSON.parse(event.body || "{}");

    const res = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Webhook-Secret": secret,
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("Webhook error:", res.status, data);
      return {
        statusCode: res.status,
        body: JSON.stringify({ error: "Webhook request failed", details: data }),
      };
    }

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
  } catch (err) {
    console.error("Proxy error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal server error" }),
    };
  }
};

export { handler };
