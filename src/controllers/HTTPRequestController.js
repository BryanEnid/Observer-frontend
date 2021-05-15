import "whatwg-fetch";

const httpRequestHandler = async (endpoint = "", options) => {
  if (endpoint.length < 1) throw new Error("[ERROR] endpoint is required");

  const { headers = {}, params, payload = "", method, baseURL } = options;

  const url = new URL(endpoint, baseURL);
  if (params) url.search = new URLSearchParams(params).toString();

  const init = {
    method,
    headers,
    body: payload ? JSON.stringify(payload) : null,
  };

  try {
    const data = await fetch(url, init);
    return await data.json();
  } catch (e) {
    console.log("ERROR", e);
    return {
      success: false,
      message: e,
    };
  }
};

export default class HTTPRequest {
  baseURL = "";

  static get = (endpoint) => {
    return httpRequestHandler(endpoint, {
      baseURL: this.baseURL,
      method: "GET",
    });
  };

  static post = (endpoint, payload) => {
    return httpRequestHandler(endpoint, {
      baseURL: this.baseURL,
      method: "POST",
      payload,
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  };
}
