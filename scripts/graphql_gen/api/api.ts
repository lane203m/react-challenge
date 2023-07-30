import 'isomorphic-fetch';

class Api {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  sendQuery = (query: string): Promise<Response> => {
    return fetch('http://0.0.0.0:3000/fedd', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });
  };
}

export default Api;
