import HTTPRequest from "./HTTPRequestController";

export const get = async (endpoint) => {
  return await HTTPRequest.get(endpoint);
};

export const save = async (endpoint, data) => {
  return await HTTPRequest.post(endpoint, data);
};
