import fetch from 'node-fetch';

const requestWrapper = async (endpoint, options) => {
  const { headers = {}, payload = '', method, baseURL } = options;
  const init = { method, headers };
  const url = new URL(endpoint, baseURL);

  if (payload) init.body = JSON.stringify(payload);

  return (await fetch(url, init)).json();
};

export default class Request {
  static get(endpoint) {
    return requestWrapper(endpoint, {
      baseURL: this.baseURL,
      method: 'GET',
      headers: this.headers,
      ...this.options,
    });
  }

  static post(endpoint, payload) {
    return requestWrapper(endpoint, {
      baseURL: this.baseURL,
      method: 'POST',
      payload,
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      ...this.options,
    });
  }
}
