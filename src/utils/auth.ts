import { userTestData } from "./user";

export const getUserResponse = (): Response => {
  const json = JSON.stringify({ auth: { user: userTestData } });

  return new Response(json, { status: 201 });
};

export const errorMessage = "Test error";

export const getErrorResponse = (): Response => {
  const json = JSON.stringify({ error: { message: errorMessage } });

  return new Response(json, { status: 201 });
};
