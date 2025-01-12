import AddSlangBanner from "@/components/AddSlangBanner";
import WordDefinition from "@/components/WordDefinition";
import WordList from "@/components/WordList";
import { verifyAuth } from "@/lib/auth";
import { getUserById } from "@/lib/user";
import { getWords, getWordsByUserId } from "@/lib/word";

export default async function MySlangs() {
  const isAuth = await verifyAuth();

  let userDetails = null;

  if (isAuth.session !== null) {
    userDetails = getUserById(isAuth.user.id);
  }

  console.log(
    "🚀 ~ file: page.jsx ~ line 19 ~ MySlangs ~ userDetails",
    userDetails
  );

  const words = await getWordsByUserId(userDetails.id);

  return (
    <main className="container md:max-w-[720px] mx-auto p-4 ">
      <AddSlangBanner></AddSlangBanner>
      <div className="pt-4">
        <WordDefinition></WordDefinition>
      </div>

      <section className="bg-primary mt-4">
        <div>
          <h1 className="text-xl font-bold text-white p-4">My Slangs</h1>
        </div>
        <WordList words={words}></WordList>
      </section>
    </main>
  );
}
