import Request from './HTTPRequestController';

describe('HTTP Request Controller', () => {
  it('Returns data from fake API', async () => {
    Request.baseURL = 'https://jsonplaceholder.typicode.com';
    expect((await Request.get('/todos/1')).userId).toEqual(1);
  });

  it('Supports parameters and queries', async () => {});

  // it('Saves data to fake API', async () => {
  //   HTTPRequestController.baseURL = 'https://jsonplaceholder.typicode.com';

  //   const data = { test: 'some data' };

  //   const response = await HTTPRequestController.post('/posts', data);

  //   expect(response.test).toEqual(data.test);
  // });

  // it("returns data from bullhorn API", async () => {
  //   HTTPRequestController.baseURL = "http://localhost:8080";
  //   expect((await HTTPRequestController.get("/posts")).success).toEqual(true);
  // });

  // it("saves data to bullhorn API", async () => {
  // });
});
