export default class FakeDataService {
  static getRandomUsers = async (amount) => {
    const response = await fetch(`https://randomuser.me/api/?results=${amount}`);
    const data = await response.json();
    return data.results;
  };

  static getRandomPictures = async (amount, keywords) => {
    try {
      const arrayOfPromises = [];

      for (const word in keywords) {
        const response = await fetch(`https://api.pexels.com/v1/search?query=${word}`);
        const data = await response.json();
        arrayOfPromises.push(data);
      }

      const results = await Promise.all(arrayOfPromises);

      return results;
    } catch (e) {}
  };
}
