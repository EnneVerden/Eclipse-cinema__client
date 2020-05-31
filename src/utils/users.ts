import { userTestData } from "./user";

export const fetchUsersResponse = (): Response => {
  const json = JSON.stringify({ users: [userTestData] });

  return new Response(json, { status: 201 });
};
