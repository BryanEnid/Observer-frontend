import DummyData from './DummyDataController';

describe('Dummy Data Controller', () => {
  const amount = 2;
  it(`Gets ${amount} random user/s`, async () => {
    const users = await DummyData.getRandomUsers(amount);
    expect(users.info.results).toBe(amount);
  });

  it('Gets random pictures', async () => {
    const { photos } = await DummyData.getRandomPictures();
    expect(photos.length).toBeGreaterThan(0);
  });

  it('Gets random videos', async () => {
    const { videos } = await DummyData.getRandomVideos();
    expect(videos.length).toBeGreaterThan(0);
  });
});
