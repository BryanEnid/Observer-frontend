export default class FakeDataService {
  static async getRandomUsers(amount) {
    const response = await fetch(`https://randomuser.me/api/?results=${amount}`);
    const data = await response.json();
    return data.results;
  }

  static async getRandomPictures(amount, keywords) {
    try {
      const arrayOfPromises = [];

      for (const word in keywords) {
        if ({}.hasOwnProperty.call(keywords, word)) {
          arrayOfPromises.push(fetch(`https://api.pexels.com/v1/search?query=${word}`));
        }
      }

      const response = await Promise.all(arrayOfPromises);

      return await Promise.all(response);
    } catch (e) {
      return {
        e,
      };
    }
  }
}
