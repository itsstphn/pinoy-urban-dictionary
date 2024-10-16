import db from "./db";
import { getUserById } from "./user";

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

export async function getWords() {
  const words = db.prepare("SELECT * FROM words").all();
  return words;
}

export async function getSingleWordById(id) {
  const word = db.prepare("SELECT * FROM words WHERE id = ?").get(id);

  const user = getUserById(word.user_id);
  return { ...word, username: user.username };
}

export async function getSingleWordRandom() {
  const word = db
    .prepare("SELECT * FROM words ORDER BY RANDOM() LIMIT 1")
    .get();

  const user = getUserById(word.user_id);
  return { ...word, username: user.username };
}
