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

  /**
   *
   * @param {string} orientation ( portrait | landscape | square )
   * @returns Video URI
   */
  static getRandomVideos(orientation = 'portrait', size = 'medium') {
    Request.headers = {
      Authorization: '563492ad6f91700001000001fb15f65e0bc34e60843e76e311a7b127',
    };
    Request.baseURL = 'https://api.pexels.com';
    const queryOptions = ['technology', 'professional'];
    const randomQuery = Math.round(Math.random() * options.length) - 1;
    return Request.get(
      `/videos/search?query=${queryOptions[randomQuery]}&orientation=${orientation}&size=${size}&per_page=80`
    );
  }

  // static getRandomTexts() {
  //   Request.headers = {
  //     Authorization: '563492ad6f91700001000001fb15f65e0bc34e60843e76e311a7b127',
  //   };
  //   Request.baseURL = 'https://fakerapi.it/api/v1';
  //   return Request.get('/texts?_quantity=1&_characters=500');
  // }
}
