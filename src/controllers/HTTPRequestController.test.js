import HTTPRequestController from "./HTTPRequestController";
// import { server } from "../mocks/server";

describe("HTTP Request Controller", () => {
  // beforeAll(() => server.listen());
  // afterAll(() => server.close());
  // afterEach(() => server.resetHandlers());

  it("Returns data from fake API", async () => {
    HTTPRequestController.baseURL = "https://jsonplaceholder.typicode.com";
    expect((await HTTPRequestController.get("/todos/1")).userId).toEqual(1);
  });

  it("Saves data to fake API", async () => {
    HTTPRequestController.baseURL = "https://jsonplaceholder.typicode.com";

    const data = { test: "some data" };

    const response = await HTTPRequestController.post("/posts", data);

    expect(response.test).toEqual(data.test);
  });

  // it("returns data from bullhorn API", async () => {
  //   HTTPRequestController.baseURL = "http://localhost:8080";
  //   expect((await HTTPRequestController.get("/posts")).success).toEqual(true);
  // });

  // it("saves data to bullhorn API", async () => {
  // });
});
