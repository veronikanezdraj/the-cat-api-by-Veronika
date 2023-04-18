const API_KEY = "83575ab6-2025-49b5-b4b6-24d7b5ad1097";
const BASE_URL = "https://api.thecatapi.com/v1";

export const METHOD_TYPES = {
  GET: "GET",
  POST: "POST",
  DELETE: "DELETE",
  PATCH: "PATCH",
};

export const request = async (url, method = METHOD_TYPES.GET, body) => {
  const data = await fetch(`${BASE_URL}${url}`, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      "x-api-key": API_KEY,
    },
    body: JSON.stringify(body),
  });
  return data.json();
};
