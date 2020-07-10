const BASE_URL = 'http://localhost:3000/articles';

class Service {
  static post(data) {
    return fetch(BASE_URL, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  static async get() {
    const response = await fetch(BASE_URL);
    const json = await response.json();
    return json;
  }
}

export default Service;
