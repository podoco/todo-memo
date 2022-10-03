

const BASE_URL = 'http://localhost:3004/';


export const fetchCreate = (url, data) => {

  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  })
    .then(() => {
      window.location.href = BASE_URL;
    })
    .catch((error) => {
      console.error('Error', error);
    })
}

export const fetchDelete = (url, id) => {
  console.log(id);
  fetch(`${url}${id}`, {
    method: "DELETE",
  })
    .then(() => {
      window.location.href = BASE_URL;
    })
    .catch((error) => {
      console.error("Error", error);
    })
}

