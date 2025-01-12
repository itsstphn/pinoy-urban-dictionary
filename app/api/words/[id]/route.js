import { formatDate } from "@/lib/date";
import { getSingleWordById } from "@/lib/word";

export async function GET(request, { params }) {
  const { id } = params;
  console.log("🚀 ~ GET ~ id:", id);

  const word = await getSingleWordById(id);
  console.log("🚀 ~ GET ~ word:", word);

  const formattedDate = formatDate(word.date_added);

  return Response.json({ ...word, formattedDate });
}
