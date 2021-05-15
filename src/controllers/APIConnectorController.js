import HTTPRequest from './HTTPRequestController';

export const get = async (endpoint) => HTTPRequest.get(endpoint);

export const save = async (endpoint, data) => HTTPRequest.post(endpoint, data);
