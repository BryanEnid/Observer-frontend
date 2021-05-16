import LocalStorage from './LocalStorageController';
// // import { server } from "../mocks/server";

describe('Local Storage Controller', () => {
  it('Saves and gets data from local storage', async () => {
    await LocalStorage.save('name', 'Bryan');
    expect(await LocalStorage.get('name')).toBe('Bryan');
  });
});
