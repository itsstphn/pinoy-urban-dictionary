import db from "./db";

export async function addWord(userId, word, definition) {
  const dateAdded = new Date().toISOString();
  console.log("🚀 ~ defineWord ~ dateAdded:", dateAdded);
  console.log("aaaaarguments: ", userId, word, definition, dateAdded);

  const result = db
    .prepare(
      "INSERT INTO words (word, definition, date_added, user_id) VALUES (?, ?, ?, ?)"
    )
    .run(word, definition, dateAdded, userId);

  return result.lastInsertRowid;
}
