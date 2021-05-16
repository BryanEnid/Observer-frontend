import fetch from 'node-fetch';

const httpRequestHandler = async (endpoint = '', options) => {
  if (endpoint.length < 1) throw new Error('[ERROR] endpoint is required');

  const { headers = {}, params, payload = '', method, baseURL } = options;
  const url = new URL(endpoint, baseURL);
  const init = { method, headers };

  if (params) url.search = new URLSearchParams(params).toString();
  if (payload) init.body = JSON.stringify(payload);

  const res = await fetch(url, init);
  return res.json();
};

export default class HTTPRequest {
  baseURL = '';

  static get(endpoint) {
    return httpRequestHandler(endpoint, {
      baseURL: this.baseURL || '',
      method: 'GET',
      ...this.options,
    });
  }

  static post(endpoint, payload) {
    return httpRequestHandler(endpoint, {
      baseURL: this.baseURL,
      method: 'POST',
      payload,
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  }
}
