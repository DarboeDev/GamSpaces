"use server";
import { cookies } from "next/headers";
// import axios from "axios";
// import { clerkClient } from "@clerk/clerk-sdk-node";

export async function setUserCookie(userData) {
  const data = JSON.stringify(userData);
  console.log("BOOOOOOOOOOOOOOOM" + data);
  cookies().set("KJUser", data, {
    path: "/",
    httpOnly: true,
    sameSite: "strict",
    secure: true,
  });
}
export async function getUserData() {
  const token = cookies().get("KJUser");
  if (token) {
    const user = token.value;
    return user;
  }
  return null;
}

export async function removeUserCookie() {
  cookies().delete("KJUser");
}

// export async function getProfile(id: string) {
//   try {
//     const response = await axios.get(`http://localhost:3001/api/users/${id}`);
//     return response.data;
//   } catch (error) {
//     console.error("Error getting user profile:", error);
//   }
// }

// export async function getClerkUser(userId: string) {
//   try {
//     const user = await clerkClient.users.getUser(userId);
//     return JSON.parse(JSON.stringify(user));
//   } catch (error) {
//     console.error("Error getting user profile:", error);
//   }
// }
