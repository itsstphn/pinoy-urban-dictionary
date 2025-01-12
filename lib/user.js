import db from "./db";

export async function createUser(username, password) {
  const result = db
    .prepare("INSERT INTO users (username, password) VALUES (?,?)")
    .run(username, password);

  return result.lastInsertRowid;
}

export function getUserByUsername(username) {
  return db.prepare("SELECT * FROM users where username = ?").get(username);
}

export function getUserById(id) {
  return db.prepare("SELECT id, username FROM users where id = ?").get(id);
}
