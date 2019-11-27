import devConfig from 'config';
export function post(url, body) {
  return fetch(devConfig.apiUrl + url, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(body),
  })
    .then((res) => {
      if (res.status === 204) {
        return res;
      }

      return res.json();
    })
}

export function get(url) {
  return fetch(devConfig.apiUrl + url)
    .then((res) => res.json())
}
