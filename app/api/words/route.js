import { formatDate } from "@/lib/date";
import { getSingleWordRandom } from "@/lib/word";

export async function GET(request) {
  const word = await getSingleWordRandom();
  console.log("🚀 ~ GET ~ words:", word);

  const formattedDate = formatDate(word.date_added);

  return Response.json({ ...word, formattedDate });
}
