export const baseURL = "http://localhost:8080/developers";
export const baseGraphQL = "http://localhost:8080/q?query=";

export const getDevelopers = () => {
  return fetch(`${baseURL}/all`).then((res) => res.json());
};

export const postDeveloper = async (developer) => {
  return fetch(`${baseURL}/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(developer),
  });
};

export const putDeveloper = (developer) => {
  return fetch(`${baseURL}/update`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(developer),
  });
};

export const searchDevelopers = (query) => {
  return fetch(`${baseGraphQL}${encodeURIComponent(query)}`).then((res) =>
    res.json()
  );
};
