import { rest } from "msw";

export const handlers = [
  rest.get("http://localhost:8080/posts", (req, res, ctx) => {
    // Persist user's authentication in the session
    return res(ctx.json({ success: true }));
  }),
];
