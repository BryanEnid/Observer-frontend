import HTTPRequestController from './HTTPRequestController';

export default class DummyData {
  static getRandomUsers(amount) {
    const request = new HTTPRequestController('https://randomuser.me');
    return request.get(`/api/?results=${amount}`);
  }

  static getRandomPictures(amount, keywords) {
    const options = { Authorization: '563492ad6f91700001000001fb15f65e0bc34e60843e76e311a7b127' };
    const request = new HTTPRequestController('https://api.pexels.com', options);
    return Object.keys(keywords).map(async (word) => request.get(`/v1/search?query=${word}`));
  }
}
