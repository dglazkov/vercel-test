import { Runner } from "@google-labs/breadboard";
import { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(
  _request: VercelRequest,
  response: VercelResponse
) {
  response.write(String(Runner));
  response.end();
}
