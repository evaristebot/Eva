import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { nom, prenom, tel, nationalite } = req.body;
  if (!nom || !prenom || !tel || !nationalite)
    return res.status(400).end();

  await redis.hset(`arjap:${Date.now()}`, {
    nom, prenom, tel, nationalite
  });

  res.status(200).json({ ok: true });
}
