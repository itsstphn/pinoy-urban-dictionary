import { getSingleWordRandom } from "@/lib/word";

export async function GET(request) {
  const words = await getSingleWordRandom();

  return Response.json({ words });
}
