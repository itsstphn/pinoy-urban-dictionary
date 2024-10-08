"use server";

import { verifyAuth } from "@/lib/auth";
import { addWord } from "@/lib/word";
import { redirect } from "next/navigation";

export async function defineWord(prevState, formData) {
  console.log("🚀 ~ defineWord ~ formData:", formData);
  const word = formData.get("word");
  const definition = formData.get("definition");
  console.log("🚀 ~ defineWord ~ word:", word, definition);
  const user = await verifyAuth();
  console.log("🚀 ~ defineWord ~ user:", user);

  let errors = {};

  if (word.trim().length < 2) {
    errors.word = "Word must be at least 2 characters long.";
  }

  if (definition.trim().length < 5) {
    errors.definition = "Definition must be at least 5 characters long.";
  }

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  try {
    const result = await addWord(user.user.id, word, definition);
    console.log("🚀 ~ defineWord ~ result: ", result);
    return {
      success: true,
    };
  } catch (error) {
    console.error("🚀 ~ defineWord ~ error:", error);
    return {
      error: "Something went wrong. Please try again.",
    };
  }
}
