import "./globals.css";

import { getWords } from "@/lib/word";
import WordDefinition from "./../components/WordDefinition";
import WordList from "./../components/WordList";
import AddSlangBanner from "@/components/AddSlangBanner";

export default async function Home() {
  const words = await getWords();

  return (
    <>
      <main className="container md:max-w-[720px] mx-auto p-3 flex flex-col gap-5">
        <AddSlangBanner></AddSlangBanner>

        <WordDefinition></WordDefinition>

        <WordList words={words}></WordList>
      </main>
    </>
  );
}
