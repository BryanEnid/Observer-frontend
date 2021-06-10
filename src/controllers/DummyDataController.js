import Request from './HTTPRequestController';

export default class DummyData {
  static getRandomUsers(amount) {
    Request.baseURL = 'https://randomuser.me';
    return Request.get(`/api/?results=${amount}`);
  }

  static getRandomPictures() {
    Request.headers = {
      Authorization: '563492ad6f91700001000001fb15f65e0bc34e60843e76e311a7b127',
    };
    Request.baseURL = 'https://api.pexels.com';
    return Request.get('/v1/curated');
  }

  static getRandomVideos() {
    Request.headers = {
      Authorization: '563492ad6f91700001000001fb15f65e0bc34e60843e76e311a7b127',
    };
    Request.baseURL = 'https://api.pexels.com';
    return Request.get('/videos/popular');
  }

  // static getRandomTexts() {
  //   Request.headers = {
  //     Authorization: '563492ad6f91700001000001fb15f65e0bc34e60843e76e311a7b127',
  //   };
  //   Request.baseURL = 'https://fakerapi.it/api/v1';
  //   return Request.get('/texts?_quantity=1&_characters=500');
  // }
}
