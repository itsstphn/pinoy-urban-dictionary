"use server";

import { createAuthSession, destroySession } from "@/lib/auth";
import { hashUserPassword, verifyPassword } from "@/lib/hash";
import { createUser, getUserByUsername } from "@/lib/user";
import { redirect } from "next/navigation";

export async function signUp(prevState, formData) {
  const username = formData.get("username");
  const password = formData.get("password");

  let errors = {};

  if (username.trim().length < 3) {
    errors.username = "Username must be at least 4 characters long";
  }

  if (password.trim().length < 8) {
    errors.password = "Password must be at least 8 characters long.";
  }

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  const hashedPassword = hashUserPassword(password);
  console.log("🚀 ~ signUp ~ hashedPassword:", hashedPassword);

  try {
    const id = await createUser(username, hashedPassword);
    await createAuthSession(id);
    redirect("/");
  } catch (error) {
    if (error.code === "SQLITE_CONSTRAINT_UNIQUE") {
      return {
        errors: {
          username:
            "It seems like an account with this username already exists.",
        },
      };
    }
    throw error;
  }
}

export async function login(prevState, formData) {
  const username = formData.get("username");
  const password = formData.get("password");

  const existingUser = getUserByUsername(username);

  if (!existingUser) {
    return {
      errors: "Could not authenticate user. Please check credentials.",
    };
  }

  const isValidPassword = verifyPassword(existingUser.password, password);

  if (!isValidPassword) {
    return {
      errors: "Could not authenticate user. Please check credentials.",
    };
  }

  await createAuthSession(existingUser.id);
  redirect("/");
}

export async function logout() {
  await destroySession();
  redirect("/");
}
