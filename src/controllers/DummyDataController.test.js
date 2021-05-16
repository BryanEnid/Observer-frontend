import DummyData from './DummyDataController';

describe('Dummy Data Controller', () => {
  const amount = 2;
  it(`Gets ${amount} random user/s`, async () => {
    await DummyData.getRandomUsers(amount);
  });
});
