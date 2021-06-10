import Request from './HTTPRequestController';

describe('HTTP Request Controller', () => {
  it('Returns data from fake API', async () => {
    Request.baseURL = 'https://jsonplaceholder.typicode.com';
    expect((await Request.get('/todos/1')).userId).toEqual(1);
  });

  it('Post data to fake API', async () => {
    Request.baseURL = 'https://jsonplaceholder.typicode.com';
    const data = { test: 'some data' };
    const response = await Request.post('/posts', data);
    expect(data.test).toEqual(response.test);
  });
});
